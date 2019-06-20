import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { Header, Box } from 'theme-ui'
import ToggleColorMode from './toggleColorMode'
import { MenuButton } from '../elements'

const NavLink = styled(Link)`
  color: #fff;
  font-size: 1.75rem;
  font-weight: 'bold';
  line-height: 1.5;
  margin: 1rem;
  padding: 1rem;
  text-decoration: none;

  &.current-page {
    border-bottom: 4px solid #993399;
  }

  &:last-of-type {
    margin-right: 0;
  }
`

const Nav = styled.nav`
  display: flex;
`

const HeaderWrapper = ({ toggleSidebar }) => {
  return (
    <Header>
      <Box p={1} my="auto">
        <MenuButton title="ToggleSidebar" onClick={toggleSidebar} />
      </Box>
      <Nav>
        <NavLink to="/" fontWeight="bold" activeClassName="current-page">
          Home
        </NavLink>
        <NavLink to="/about/" activeClassName="current-page">
          About
        </NavLink>
        <NavLink to="/contact/" activeClassName="current-page">
          Contact
        </NavLink>
      </Nav>
      <ToggleColorMode />
    </Header>
  )
}

export default HeaderWrapper
