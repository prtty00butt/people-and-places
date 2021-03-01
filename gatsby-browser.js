import React from "react"
import { ThemeProvider } from "@emotion/react"
import { ThemeSwitcherProvider } from "./src/store"
import { theme } from "./src/theme"

import "./src/normalize.css"
import "spectre.css"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <ThemeSwitcherProvider>{element}</ThemeSwitcherProvider>
  </ThemeProvider>
)
