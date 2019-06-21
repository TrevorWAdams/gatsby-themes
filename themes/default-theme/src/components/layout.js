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
            <h1>h1</h1>
            <h2>h2</h2>
            <h3>h3</h3>
            <h4>h4</h4>
            <h5>h5</h5>
            <p>
              Wes Anderson fap tousled locavore hoodie disrupt stumptown 8-bit
              pickled normcore meh VHS 90's distillery cornhole quinoa
            </p>
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
