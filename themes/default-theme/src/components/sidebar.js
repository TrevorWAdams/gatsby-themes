import React from 'react'
import { Box, Flex } from 'theme-ui'
import { Nav, NavLink, Sidebar } from '../elements'

const SidebarWrapper = ({ isOpen }) => {
  return (
    <Sidebar as="aside" width={isOpen ? 1/3 : 0} isOpen={isOpen} >
      <Box as="h1" m={3} p={3}>Menu</Box>
      <Nav>
        <Flex flexDirection="column">
          <NavLink to="/" fontWeight="bold" activeClassName="current-page">
            Home
          </NavLink>
          <NavLink to="/about/" activeClassName="current-page">
            About
          </NavLink>
          <NavLink to="/contact/" activeClassName="current-page">
            Contact
          </NavLink>
          <NavLink to="/posts/" activeClassName="current-page">
            Posts
          </NavLink>
        </Flex>
      </Nav>
    </Sidebar>
  )
}

export default SidebarWrapper
