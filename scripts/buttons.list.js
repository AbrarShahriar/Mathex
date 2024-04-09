import { select } from "./utils.js"

function buttonClickHandler(command) {
}

export const quickActionList = [
  "\\", "{", "}", "(", ")", "_", "^", "\\:"
]

export const buttonsList = [
  {
    command: "\\alpha ",
    cursorOffset: 7,
    children: [
      {
        command: "\\beta ",
        cursorOffset: 6
      },
      {
        command: "\\gamma ",
        cursorOffset: 7,
      },
      {
        command: "\\lambda ",
        cursorOffset: 8
      },
      {
        command: "\\theta ",
        cursorOffset: 7
      },
      {
        command: "\\psi ",
        cursorOffset: 5
      },
      {
        command: "\\sigma ",
        cursorOffset: 7
      },
      {
        command: "\\mu ",
        cursorOffset: 4
      }
    ]
  },
  {
    command: "\\eta ",
    cursorOffset: 5,
    children: [
      {
        command: "\\epsilon ",
        cursorOffset: 9
      },
      {
        command: "\\omega ",
        cursorOffset: 6
      },
      {
        command: "\\phi ",
        cursorOffset: 5
      },
      {
        command: "\\pi ",
        cursorOffset: 4
      },
      {
        command: "\\rho ",
        cursorOffset: 5
      },
      {
        command: "\\tau ",
        cursorOffset: 6
      },
      {
        command: "\\zeta ",
        cursorOffset: 6
      },
    ]
  },
  {
    command: "\\Delta ",
    cursorOffset: 7,
    children: [
      {
        command: "\\nabla ",
        cursorOffset: 7
      },
      {
        command: "\\Omega ",
        cursorOffset: 7
      },
      {
        command: "\\Phi ",
        cursorOffset: 5
      },
      {
        command: "\\Psi ",
        cursorOffset: 5
      },
      {
        command: "\\infty ",
        cursorOffset: 6
      }
    ]
  },
  {
    command: "\\hat{x}",
    cursorOffset: 8,
    children: [
      {
        command: "\\bar{x}",
        cursorOffset: 8
      },
      {
        command: "\\vec{x}",
        cursorOffset: 8
      },
      {
        command: "\\dot{x}",
        cursorOffset: 8
      }
    ]
  },
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
    cursorOffset: 1,
    children: [
      {
        command: "x^3",
        cursorOffset: 1
      },
      {
        command: "x^n",
        cursorOffset: 3
      }
    ]
  },
  {
    command: "x^{-1}",
    cursorOffset: 1,
    children: [
      {
        command: "x^{-n}",
        cursorOffset: 5
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
    command: "\\sin()",
    cursorOffset: 5,
    children: [
      {
        command: "\\cos()",
        cursorOffset: 5
      },
      {
        command: "\\tan()",
        cursorOffset: 5
      },
      {
        command: "\\cot()",
        cursorOffset: 5
      },
      {
        command: "\\sec()",
        cursorOffset: 5
      },
      {
        command: "\\cosec()",
        cursorOffset: 7
      }
    ]
  },
  {
    command: "()",
    cursorOffset: 1,
    children: [
      {
        command: "\\{\\}",
        cursorOffset: 2
      },
      {
        command: "[]",
        cursorOffset: 1
      }
    ]
  },
  {
    command: "\\pm ",
    cursorOffset: 4,
    children: [
      {
        command: "+ ",
        cursorOffset: 2,
      },
      {
        command: "- ",
        cursorOffset: 2,
      },
      {
        command: "\\times ",
        cursorOffset: 7,
      },
      {
        command: "\\div ",
        cursorOffset: 5,
      }
    ]
  },
  {
    command: "= ",
    cursorOffset: 2,
    children: [
      {
        command: "\\equiv ",
        cursorOffset: 7,
      },
      {
        command: "\\approx ",
        cursorOffset: 8,
      },
      {
        command: "\\cong ",
        cursorOffset: 6
      },
      {
        command: "\\neq ",
        cursorOffset: 5
      },
      {
        command: "\\propto ",
        cursorOffset: 9
      }
    ]
  },
  {
    command: "\\geq ",
    cursorOffset: 5,
    children: [
      {
        command: "\\leq ",
        cursorOffset: 5
      },
      {
        command: "\\leftarrow ",
        cursorOffset: 11
      },
      {
        command: "\\rightarrow ",
        cursorOffset: 12
      },
      {
        command: "\\rightleftharpoons ",
        cursorOffset: 19
      }
    ]
  },
  {
    command: "\\perp ",
    cursorOffset: 6,
    children: [
      {
        command: "\\parallel ",
        cursorOffset: 11
        },
      {
        command: "\\angle ",
        cursorOffset: 7
        },
      {
        command: "\\triangle ",
        cursorOffset: 10
        }
      ]
  },
  {
    command: "\\log ",
    cursorOffset: 5,
    children: [
      {
        command: "\\log_{10} ",
        cursorOffset: 13,
      },
      {
        command: "\\log_e ",
        cursorOffset: 7,
      },
      {
        command: "\\ln ",
        cursorOffset: 4,
      }
    ]
  },
  {
    command: "\\lim_{x \\to 0} \\: ",
    cursorOffset: 18,
    children: [
      {
        command: "\\lim_{x \\to \\infty} \\: ",
        cursorOffset: 25,
      },
      {
        command: "\\lim_{x \\to h} \\: ",
        cursorOffset: 13,
      }
    ]
  },
  {
    command: "\\int  \\: dx",
    cursorOffset: 5,
    children: [
      {
        command: "\\frac{d}{dx}",
        cursorOffset: 13
      },
      {
        command: "\\frac{\\partial}{\\partial x}",
        cursorOffset: 29
      },
      {
        command: "\\frac{d}{dx}[]_{x=a}",
        cursorOffset: 13
      },
      {
        command: "\\int_0^1  \\: dx",
        cursorOffset: 9
      },
    ]
  },
  {
    command: "\\sum ",
    cursorOffset: 5,
    children: [
      {
        command: "\\sum_{n=1}^{\\infty} ",
        cursorOffset: 20
      }
    ]
  },
]