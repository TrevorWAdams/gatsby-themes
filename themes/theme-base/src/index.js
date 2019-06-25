import React from 'react'
import { ColorMode, ThemeProvider, Styled } from 'theme-ui'
import theme from './theme'

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <ColorMode />
    <Styled.root>{element}</Styled.root>
  </ThemeProvider>
)
