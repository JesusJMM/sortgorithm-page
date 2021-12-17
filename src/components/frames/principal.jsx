import {
  VStack,
  Heading,
  Text,
  Grid,
  useBreakpointValue,
  Fade,
} from '@chakra-ui/react';
import './principal.css'
import OrderLines from '../orderLines.jsx'
import Link from '../ui/styledLink';

const arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
const arr2 = [6, 13, 11, 4, 2, 7, 12, 3, 9, 5, 1, 8, 10, 0]

export default function PrincipalFrame() {
  // useBreakpointValue has delay, do not put in width OrderLines prop
  const _ = useBreakpointValue({base:250, md: 400}) // update the component when the resolution change
  return (
    <Grid pt="10em" pb={10} alignItems="center" templateColumns={{ base: "1fr", md: "1.3fr 1fr" }}>
      <VStack p={10} spacing={8} alignItems="start">
        <Heading size="2xl" textAlign={{ sm: 'center', md: 'left' }} w="100%">Sortgorithm</Heading>
        <Text fontWeight="bold" fontSize="xl">
          A way of visualizing what happens behind the algorithms that we use every day.
        </Text>
        <Link fontSize="xl">Go to project →</Link>
      </VStack>
      <VStack height="100%" justifyContent="center" alignItems="center">
        <Fade in>
          <OrderLines orders={[arr2, arr1]} width={window.innerWidth < 480 ? 250: 400}/>
        </Fade>
      </VStack>
    </Grid>
  )
}
