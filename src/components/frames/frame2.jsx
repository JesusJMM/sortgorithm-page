import {
  Grid,
  VStack,
  Heading,
  Text,
  Fade,
  useBreakpointValue,
} from '@chakra-ui/react';
import OrderLines from '../orderLines';
import Link from '../ui/styledLink';

const orders = [
  [17, 15, 12, 3, 8, 11, 18, 19, 0, 5, 1, 13, 16, 4, 2, 10, 7, 14, 9, 6],
  [15, 17, 12, 3, 8, 11, 18, 19, 0, 5, 1, 13, 16, 2, 4, 7, 10, 14, 6, 9],
  [12, 15, 17, 3, 8, 11, 18, 19, 0, 5, 1, 13, 16, 2, 4, 7, 10, 14, 6, 9],
  [3, 8, 12, 15, 17, 0, 5, 11, 18, 19, 1, 2, 4, 13, 16, 6, 7, 9, 10, 14],
  [0, 3, 5, 8, 11, 12, 15, 17, 18, 19, 1, 2, 4, 6, 7, 9, 10, 13, 14, 16],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
]

export default function Frame2() {
  const header = (
    <Fade in>
    <VStack key='h' p={4} alignItems={['start', 'center']}>
      <Heading size="2xl" textAlign="center">The data is awesome!</Heading>
      <Text fontWeight="bold" fontSize="lg" textAlign='center'>See how the data is sorting in real time</Text>
      <Link fontSize="xl" href="https://jesusjmm.github.io/sortgorithm/">Go to project →</Link>
    </VStack>
    </Fade>
  )
  const comp = useBreakpointValue({ base: 'b', md: 'm' })
  const _ = useBreakpointValue({base:250, md: 400}) // update the component when the resolution change
  console.log(_)
  // console.log(comp)

  return (
    <Grid py={20} templateColumns={{ base: "1fr", md: "1.3fr 1fr" }}>
      {comp === 'b' && header}
      <VStack key='e' height="100%" justifyContent="center" alignItems="center">
        <Fade in>
          <OrderLines width={window.innerWidth < 480 ? 250 : 400} orders={orders} />
        </Fade>
      </VStack>
      {comp !== 'b' && header}
    </Grid>
  )
}
