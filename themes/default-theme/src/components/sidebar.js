import React from 'react'
import { Box, Flex } from 'theme-ui'

const Sidebar = ({ isOpen }) => {
  return (
    <Box
      bg="primary3"
      as="aside"
      width={isOpen ? 1 / 6 : 1 / 12}
      overflow="hidden"
      p={3}
    >
      <Box as="h1">Posts</Box>
      <Flex bg="background" p={2} height="100%" m={1}>
        <Box width={isOpen ? 1 / 2 : 1}>
          <Box overflow="hidden">icon1</Box>
          <Box overflow="hidden">icon2</Box>
        </Box>

        <Box width={isOpen ? 1 / 2 : 0}>
          <Flex
            width={1}
            flexDirection="column"
            overflow="hidden"
          >
            <Box>title 1</Box>
            <Box>title 2</Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}

export default Sidebar
