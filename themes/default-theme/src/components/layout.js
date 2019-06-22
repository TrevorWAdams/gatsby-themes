import React, { useState } from 'react'
import { Container, Layout, Main, Footer, Box } from 'theme-ui'
import { Global } from '@emotion/core'
import Helmet from 'react-helmet';
import Sidebar from './sidebar'
import Header from './header'
import useSiteMetadata from '../hooks/use-sitemetadata';


export default ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const { title, description } = useSiteMetadata();

  return (
    <Layout>
      <Global
        styles={{
          body: {
            margin: 0,
          },
        }}
      />
      
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      <Main>
        <Container>
          <Box width={1} p={3}>
            {children}
          </Box>
          <Sidebar isOpen={isSidebarOpen} />
        </Container>
      </Main>
      <Footer>I am the Footer</Footer>
    </Layout>
  )
}
