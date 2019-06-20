import React, { useState } from "react"
import { Container, Layout, Header, Main, Footer, Box, Flex } from "theme-ui"
import { Global } from "@emotion/core"
import ToggleColorMode from "./toggleColorMode"
import Sidebar from "./Sidebar"

export default ({ children }) => {
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
      <Header>
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
        <Container>
          <Sidebar isOpen={isOpen}>
            <div>
              <h2>Sidebar</h2>
              <p>
                Wes Anderson fap tousled locavore hoodie disrupt stumptown 8-bit
                pickled normcore meh VHS 90's distillery cornhole quinoa
              </p>
            </div>
          </Sidebar>
          <Box width={1} p={3}>
            {children}
          </Box>
        </Container>
      </Main>
      <Footer>
        <Flex width={1}>
          <Box width={1 / 6}>Icon</Box>
          <Box width={2 / 3}>I am the Footer Column 2</Box>
          <Box width={1 / 6}>Icon</Box>
        </Flex>
      </Footer>
    </Layout>
  )
}
