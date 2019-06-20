import React from "react"
import { Box } from "theme-ui"

const Sidebar = ({ isOpen, children }) => {
  return (
    <Box
      bg="primary"
      as='aside'
      width={isOpen ? 1 / 6 : 0}
      overflow="hidden"
      
    >
      {children}
    </Box>
  )
}

export default Sidebar
