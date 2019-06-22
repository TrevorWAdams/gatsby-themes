import React, { useState } from 'react'
import { Container, Layout, Main, Box } from 'theme-ui'
import { Global } from '@emotion/core'
import Sidebar from './sidebar'
import Header from './header'
import useSiteMetadata from '../hooks/use-sitemetadata'
import Footer from './footer'
import SEO from './seo'

export default ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const { title, description } = useSiteMetadata()

  return (
    <Layout>
      <Global
        styles={{
          body: {
            margin: 0,
          },
        }}
      />
      <SEO title={title} description={description} />
      <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      <Main>
        <Container>
          <Box width={1} p={3}>
            {children}
          </Box>
          <Sidebar isOpen={isSidebarOpen} />
        </Container>
      </Main>
      <Footer />
    </Layout>
  )
}
