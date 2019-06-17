import React from "react"
import {
  useColorMode,
  Layout,
  Header,
  Main,
  Container,
  Footer,
  Box,
  Flex,
} from "theme-ui"
import { Global } from "@emotion/core"

export default ({ children }) => {
  // eslint-disable-next-line
  const [mode, setMode] = useColorMode()

  return (
    <Layout>
      <Global
        styles={{
          body: {
            margin: 0,
          },
        }}
      />
      <Header
        css={{
          p: 4,
        }}
      >
        <Flex>
          <Box>
            <button title="Light Theme" onClick={() => setMode("light")}>
              Light
            </button>
          </Box>
          <Box>
            <button title="Dark Theme" onClick={() => setMode("dark")}>
              Dark
            </button>
          </Box>

          <Box>
            <button title="Purple Theme" onClick={() => setMode("purple")}>
              Purple
            </button>
          </Box>
          <Box>
            <button title="Blue Theme" onClick={() => setMode("blue")}>
              Blue
            </button>
          </Box>
        </Flex>
      </Header>
      <Main>
        <Container>{children}</Container>
      </Main>
      <Footer>I am the Footer</Footer>
    </Layout>
  )
}
