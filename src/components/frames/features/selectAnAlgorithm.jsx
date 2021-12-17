import {
  Text,
  SimpleGrid,
} from '@chakra-ui/react'
export default function SelectAnAlgorithm(props){
  return (
    <SimpleGrid columns={2}>
      <Text fontWeight="bold">Merge Sort</Text>      
      <Text fontWeight="bold">Quick Sort</Text>      
      <Text fontWeight="bold">Buble Sort</Text>      
      <Text fontWeight="bold">Selection Sort</Text>      
      <Text fontWeight="bold">Tim Sort</Text>      
      <Text fontWeight="bold">...</Text>      
    </SimpleGrid>
  )
}
