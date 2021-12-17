import { Box } from '@chakra-ui/react'
const Line = ({h, color}) => (
  <Box
    h={`${h || 40}px`}
    w="4px"
    bgColor={color ||"gray"}
    borderRadius="4px"
  />
)
export default Line;
