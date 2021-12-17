import {
  VStack,
  Heading,
  Text,
  Flex,
} from '@chakra-ui/react';
import AddItems from './features/addItems';
import TrackAnItem from './features/trackAnItem'
import SelectAnAlgorithm from './features/selectAnAlgorithm';
import Link from '../ui/styledLink';

export default function Frame3() {
  return (
    <VStack py={20} px={[0, 20]} spacing={20}>
      <Heading size="2xl" textAlign='center'>Change the parameters</Heading>
      <Flex justifyContent="space-between" gap={8} direction={{ base: 'column', md: 'row' }} w="100%">
        <VStack spacing={4}>
          <Text textAlign='center' fontSize="xl" fontWeight="bold">Number of items</Text>
          <AddItems />
        </VStack>
        <VStack spacing={4}>
          <Text textAlign='center' fontSize="xl" fontWeight="bold">Track an item</Text>
          <TrackAnItem len={11} />
        </VStack>
        <VStack spacing={1}>
          <Text textAlign='center' fontSize="xl" fontWeight="bold">Select the Algorithm</Text>
          <SelectAnAlgorithm/>
        </VStack>
      </Flex>
      <Link fontSize="xl" href="https://jesusjmm.github.io/sortgorithm/">Go to project →</Link>
    </VStack>
  )

}
