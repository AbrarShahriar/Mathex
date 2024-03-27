export const select = el => document.querySelector(el)
export const createEl = el => document.createElement(el)
export const addStrAtPos = (str, pos, val) => str.slice(0, pos) + val + str.slice(pos);
export const render = () => {
  console.log("rendering latex")
  katex.render(select(".input").value, select(".rendered_value"), {
    throwOnError: true
  });
}
export const addTextToTextarea = (strToAdd, cursorOffset = 1) => {
  const input = select(".input")
  let prevValue = input.value
    let prevCaretPos = input.selectionStart
    
    let newValue = addStrAtPos(prevValue, prevCaretPos, strToAdd)
        
    input.value = newValue
    
    let newCaretPos = prevCaretPos + cursorOffset
    
    input.focus();
    input.setSelectionRange(newCaretPos, newCaretPos)
}