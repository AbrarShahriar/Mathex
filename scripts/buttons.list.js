import { select } from "./utils.js"

function buttonClickHandler(command) {
}

export const quickActionList = [
  "\\", "{", "}", "_", "^"
]

export const buttonsList = [
  {
    command: "\\frac{x}{y}",
    cursorOffset: 7,
    children: [
      {
        command: "z\\frac{x}{y}",
        cursorOffset: 8
      }
    ]
  },
  {
    command: "x^2",
    cursorOffset: 3,
    children: [
      {
        command: "x^3",
        cursorOffset: 3
      },
      {
        command: "x^n",
        cursorOffset: 3
      }
    ]
  },
  {
    command: "\\sqrt{}",
    cursorOffset: 6,
    children: [
      {
        command: "\\sqrt[3]{}",
        cursorOffset: 9
      },
      {
        command: "\\sqrt[n]{}",
        cursorOffset: 7
      }
    ]
  },
  {
    command: "\\int  \\: dx",
    cursorOffset: 5,
    children: [
      {
        command: "\\int_0^1  \\: dx",
        cursorOffset: 9
      },
    ]
  },
]