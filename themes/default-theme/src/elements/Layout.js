import styled from '@emotion/styled'
import { Box, Flex } from 'theme-ui'

const Center = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
`
const Sidebar = styled(Flex)`
  flex-direction: column;
  overflow: 'hidden';
  color: ${props =>
    props.theme.colors.text ? props.theme.colors.text : 'pink'};
  background-color: ${props =>
    props.theme.colors.primary3 ? props.theme.colors.primary3 : 'pink'};
`

export { Center, Sidebar }
