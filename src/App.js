import {
  Container,
} from '@chakra-ui/react'
import PrincipalFrame from './components/frames/principal'
import Frame2 from './components/frames/frame2.jsx'
import Frame3 from './components/frames/frame3.jsx'
import Frame5 from './components/frames/frame5.jsx'

function App() {
  return (
    <Container maxW="container.xl" p={0} pb={100}>
      <PrincipalFrame />
      <Frame2/>
      <Frame3/>
      <Frame5/>
    </Container>
  );
}

export default App;
