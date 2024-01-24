import Container from 'react-bootstrap/Container'

import Header from './components/Header'
import Body from './components/Body'
import { Posts } from './components/Posts'

export default function App() {

 return (

  <Container fluid data-bs-theme='dark' className='app'>
      <Header />
      <Body>
        <Posts></Posts>
      </Body>
  </Container>
 )   
}

