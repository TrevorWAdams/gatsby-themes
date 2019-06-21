import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { Header, Box } from 'theme-ui'
import ToggleColorMode from './toggle-color-mode'
import { MenuButton } from '../elements'

const NavLink = styled(Link)`
  color: ${props =>
    props.theme.colors.white ? props.theme.colors.white : '#FFF'};
  font-size: 1.75rem;
  font-weight: 'bold';
  line-height: 1.5;
  margin: 1rem;
  padding: 1rem;
  text-decoration: none;

  &.current-page {
    border-bottom: 4px solid
      ${props =>
        props.theme.colors.accent ? props.theme.colors.accent : '#993399'};
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

      <Box p={1} my="auto">
        <ToggleColorMode />
      </Box>
    </Header>
  )
}

export default HeaderWrapper
