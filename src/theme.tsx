import { Theme } from "@emotion/react"

type Colors = {
  menuBackground: string
}

const colors: Colors = {
  menuBackground: "#333333",
}

export const theme: Theme = {
  colors: colors,
  zIndex: {
    intro: 102,
    player: 100,
    menu: 101,
  },
}
