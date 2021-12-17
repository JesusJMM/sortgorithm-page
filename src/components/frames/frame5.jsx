import {
  VStack,
  Heading,
  Text,
  Container,
} from '@chakra-ui/react'
import StyledLink from '../ui/styledLink.jsx' 

export default function Frame5() {
  return (
    <>
      <Heading w="100%" pt={20} pb={10} textAlign='center' size="2xl">Who do this?</Heading>
      <Container>
        <Text pb={8} fontSize="xl" fontWeight="medium">
          Hello i am jesus marcano a fullstack developer, i have lerarned a lot of this {" "}<StyledLink>project</StyledLink>, i hope that you play with it.
        </Text>
        <Text fontWeight="medium" fontSize="xl">
          This is part of my {" "}
          <StyledLink>portafolio</StyledLink>
          ,there you can found more projects made by me.
        </Text>
      <VStack pt={8} alignItems='start' w="100%" >
        <StyledLink fontSize="xl">Go back to portafolio ←</StyledLink>
        <StyledLink fontSize="xl">Go to project →</StyledLink>
      </VStack>
      </Container>
    </>
  )
}
