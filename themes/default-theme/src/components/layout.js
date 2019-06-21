import React, { useState } from 'react'
import { Container, Layout, Main, Footer, Box } from 'theme-ui'
import { Global } from '@emotion/core'
import Sidebar from './sidebar'
import Header from './header'


export default ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <Layout>
      <Global
        styles={{
          body: {
            margin: 0,
          },
        }}
      />
      <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      <Main>
        <Container>
          <Sidebar isOpen={isSidebarOpen}>
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
      <Footer>I am the Footer</Footer>
    </Layout>
  )
}
