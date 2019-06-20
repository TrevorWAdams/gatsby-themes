import React from 'react'
import styled from '@emotion/styled'
import { MenuIcon } from '../elements'

const Button = styled.button`
  background-color: #333399;
  border: none;
  color: white;
  padding: 1rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 0.25rem;
  cursor: pointer;
`

const MenuButton = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <MenuIcon />
    </Button>
  )
}

export { Button, MenuButton }
