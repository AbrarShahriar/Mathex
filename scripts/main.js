import { select, createEl, render, addStrAtPos, addTextToTextarea } from "./utils.js"
import { quickActionList, buttonsList } from "./buttons.list.js"
import ActionButton from "./components/ActionButton.js"

// Declare initial states
const states = {
  inputValueChanged: false
}

// Fetch frequently used elements
const elements = {
  refreshBtn: select('.refresh'),
  input: select(".input"),
  quickActions: select(".quick_actions"),
  actions: select(".actions"),
  clearBtn: select(".clear"),
  copyBtn: select(".copy"),
  shareBtn: select(".share")
}

const url = new URL(window.location)

if(url.searchParams.has("inv")) {
  elements.input.value = atob(url.searchParams.get("inv"))
}


// Initial render
render()


// - Register Event Listeners - //

elements.input.addEventListener("keyup", () => render())

elements.refreshBtn.addEventListener("click", () => render())

elements.clearBtn.addEventListener("click", () => {
  elements.input.value = ""
  render()
})

elements.copyBtn.addEventListener("click", () => {
  elements.input.select()
  elements.input.setSelectionRange(0, 99999)
  navigator.clipboard.writeText(elements.input.value)
})

elements.shareBtn.addEventListener("click", async () => {
  let inv = btoa(elements.input.value)
  url.searchParams.set("inv", inv)
  // navigator.clipboard.writeText(url)
  
  let shareData = {
    title: "Mat-Ex Equation",
    text: "Click to see the equation!",
    url: url.href
  }
  
  try {
    await navigator.share(shareData)
  } catch (e) {
    console.log(e)
  }
  
})

// Render quick action buttons

quickActionList.forEach(action => {
  const quickAction = createEl("div")
  quickAction.classList.add("quick_action")
  quickAction.innerText = action
  
  quickAction.addEventListener("click", () => addTextToTextarea(action, action.length))
    render()
  
  elements.quickActions.append(quickAction)
})

// Render action buttons
buttonsList.forEach(button => {
  elements.actions.append(ActionButton({
    command: button.command,
    cursorOffset: button.cursorOffset,
    children: button.children
  }))
})

// Render actions button icons
renderMathInElement(elements.actions, {
  delimiters: [
    {
      left: '$$', right: '$$', display: true
    },
  ],
  throwOnError: true
})
