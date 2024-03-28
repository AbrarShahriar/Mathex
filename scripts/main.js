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
  actions: select(".actions")
}

// Initial render
render()


// - Register Event Listeners - //

elements.input.addEventListener("keyup", () => render())

elements.refreshBtn.addEventListener("click", () => render())

// Render quick action buttons

quickActionList.forEach(action => {
  const quickAction = createEl("div")
  quickAction.classList.add("quick_action")
  quickAction.innerText = action
  
  quickAction.addEventListener("click", () => addTextToTextarea(action, action.length))
  
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
