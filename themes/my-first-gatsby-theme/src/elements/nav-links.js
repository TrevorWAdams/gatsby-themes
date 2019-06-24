import styled from '@emotion/styled'
import { Link } from 'gatsby'


const NavLink = styled(Link)`
  color: ${props =>
    props.theme.colors.white ? props.theme.colors.white : 'pink'};
  font-size: 1.75rem;
  font-weight: 'bold';
  line-height: 1.5;
  margin: 1rem;
  padding: 1rem;
  text-decoration: none;

  &.current-page {
    border-bottom: 4px solid
      ${props =>
        props.theme.colors.accent ? props.theme.colors.accent : 'pink'};
  }

  &:last-of-type {
    margin-right: 0;
  }
`

const Nav = styled.nav`
  display: flex;
`

export {Nav, NavLink}