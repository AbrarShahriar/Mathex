import { createEl, addTextToTextarea, render } from "../utils.js"

export default function actionDivButton({ command, cursorOffset, children }) {
  
  let longPressTimer;
  let touchStartX;
  let touchStartY;
  let hoveredOption = null;
  let isLongPress = false;
  
  const actionDiv = createEl("div")
  actionDiv.classList.add("action")
  
  const mainDiv = createEl("div")
  mainDiv.innerText = `$$${command}$$`
  
  const menuDiv = createEl("div")
  menuDiv.classList.add("menu")
  
  if(children) {
    children.forEach(child => {
      const optionDiv = createEl("div")
      optionDiv.classList.add("option")
      optionDiv.innerText = `$$${child.command}$$`
      
      optionDiv.addEventListener("click", () => {
          addTextToTextarea(child.command, child.cursorOffset)
          render()
      })
       
      menuDiv.append(optionDiv)
    })
  }
  actionDiv.append(mainDiv)
  actionDiv.append(menuDiv)
  
  function handleClick(event) {
    if (!isLongPress) {
      addTextToTextarea(command, cursorOffset)
      render()
    }
    event.preventDefault();
  }
  function startLongPress() {
    isLongPress = true;
    longPressTimer = setTimeout(() => {
      menuDiv.style.display = 'flex';
    }, 500);
  }
  function endPress() {
    clearTimeout(longPressTimer);
    menuDiv.style.display = 'none';
    if (hoveredOption) {
      hoveredOption.click()

      hoveredOption.classList.remove('hovered');
      hoveredOption = null;
    }
    isLongPress = false;

  }
  
  actionDiv.addEventListener('mousedown', startLongPress);
  actionDiv.addEventListener('mouseup', endPress);
  actionDiv.addEventListener('mouseleave', endPress);
  actionDiv.addEventListener('touchstart', function(event) {
    startLongPress();
    touchStartX = event.touches[0].clientX;
    touchStartY = event.touches[0].clientY;
  });
  actionDiv.addEventListener('touchend', endPress);
  actionDiv.addEventListener('touchmove', function(event) {
    const touch = event.touches[0];
    const targetOption = document.elementFromPoint(touch.clientX, touch.clientY);
    if (targetOption.classList.contains('option')) {
      if (hoveredOption !== targetOption) {
        if (hoveredOption) {
          hoveredOption.classList.remove('hovered');
        }
        hoveredOption = targetOption;
        hoveredOption.classList.add('hovered');
      }
    }
    event.preventDefault();
  });
  actionDiv.addEventListener("click", handleClick)
  
  
  
  return actionDiv
}