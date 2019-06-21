import React from "react"
import { Box } from "theme-ui"

const Sidebar = ({ isOpen, children }) => {
  return (
    <Box
      bg="primary3"
      as='aside'
      width={isOpen ? 1 / 6 : 0}
      overflow="hidden"
      p={isOpen ? 3 : 0}
    >
      {children}
    </Box>
  )
}

export default Sidebar
