/** @jsx jsx */
import React, { useState } from "react"
import { jsx, ThemeProvider, Flex, Styled } from "theme-ui"
import { toTheme } from "@theme-ui/typography"

import Layout from "../layouts/default-layout"
import GoogleFonts from "./google-fonts"
import Button from "./button"
import themes from "./typography-themes"
import typographyThemes from "./typography-themes"

const themeNames = Object.keys(themes)

const ThemeSelect = props => (
  <div>
    <label
      htmlFor={props.name}
      sx={{
        fontSize: 16,
        mr: 2
      }}
    >
      Theme
    </label>
    <select
      id={props.name}
      {...props}
      sx={{
        fontFamily: "system-ui, sans-serif",
        fontSize: 16,
        p: 2
      }}
    >
      {themeNames.map(name => (
        <option key={name} label={name} value={name} />
      ))}
    </select>
  </div>
)

export default props => {
  const [themeName, setTheme] = useState(themeNames[0])

  const typographyTheme = typographyThemes[themeName]
  const theme = toTheme(typographyTheme)

  return (
    <Layout {...props}>
      <Flex
        sx={{
          alignItems: "center",
          py: 4
        }}
      >
        <ThemeSelect
          name="theme"
          value={themeName}
          onChange={e => {
            setTheme(e.target.value)
          }}
        />
        <Button
          sx={{
            ml: 2
          }}
          onClick={e => {
            const i = (themeNames.indexOf(themeName) + 1) % themeNames.length
            setTheme(themeNames[i])
          }}
        >
          Next
        </Button>
      </Flex>
      <ThemeProvider theme={theme}>
        <GoogleFonts />
        <Styled.root>{props.children}</Styled.root>
      </ThemeProvider>
    </Layout>
  )
}
