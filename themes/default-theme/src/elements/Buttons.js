import React from 'react'
import styled from '@emotion/styled'
import { MenuIcon } from './icons'

const Button = styled.button`
  background-color: ${props =>
    props.theme.colors.secondary ? props.theme.colors.secondary : '#333399'};
  border: none;
  color: white;
  padding: 1rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  height: 50px;
  width: 50px;
  margin: 0.25rem;
  cursor: pointer;
`

const MenuButton = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <MenuIcon color="white" />
    </Button>
  )
}

export { Button, MenuButton }
