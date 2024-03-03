import Container from 'react-bootstrap/Container';

import { Posts } from './components/Posts';
import Header from './components/Header';
import Body from './components/Body';
import Car from "./components/Car";
import Register from "./components/forms/Register";


export default function App() {

 return (

  <Container fluid data-bs-theme='dark' className='app'>
      <Header />
      <Body>
        {/* <Posts></Posts> */}
        <Car />
        <Register /> 
      </Body>
  </Container>
 )   
}

