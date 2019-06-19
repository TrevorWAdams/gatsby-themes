import React from "react"
import { Box, Flex } from "theme-ui"
const Sidebar = ({ isOpen }) => {
  return (
    <Flex
      bg="primary"
      flexDirection="column"
      width={isOpen ? 1/6 : 0}
      overflow="hidden"
    >
      <Box>I am the sidebar.</Box>
      <Box>{isOpen ? <h2>OPEN</h2> : <h2>CLOSED</h2>}</Box>
    </Flex>
  )
}

export default Sidebar
