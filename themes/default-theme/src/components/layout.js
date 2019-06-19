import React, { useState } from "react"
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
import ToggleColorMode from "./ToggleColorMode"
import Sidebar from "./Sidebar"

export default ({ children }) => {
  // eslint-disable-next-line
  const [mode, setMode] = useColorMode()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Layout>
      <Global
        styles={{
          body: {
            margin: 0,
          },
        }}
      />
      <Header bg="primary">
        <Flex>
          <Box>
            <button title="ToggleSidebar" onClick={() => setIsOpen(!isOpen)}>
              Sidebar
            </button>
          </Box>
          <Box>
            <ToggleColorMode />
          </Box>
        </Flex>
      </Header>
      <Main>
        <Flex>
          <Sidebar isOpen={isOpen} />
          <Box width={1} p={3}>
            {children}
          </Box>
        </Flex>
      </Main>
      <Footer color="white" bg="rebeccapurple">
        <Flex width={1}>
          <Box width={1 / 6}>Icon</Box>
          <Box width={2 / 3}>I am the Footer Column 2</Box>
          <Box width={1 / 6}>Icon</Box>
        </Flex>
      </Footer>
    </Layout>
  )
}
