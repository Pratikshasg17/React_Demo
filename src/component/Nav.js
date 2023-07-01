//import 'bootstrap/dist/css/bootstrap.min.css';  
import {Nav, Navbar, Container} from 'react-bootstrap';  
function Nav1(props) {  
  return (  
    <Navbar bg="primary" expand="md">  
    <Container>  
      <Navbar.Brand href="/">{props.title}</Navbar.Brand>  
      <Navbar.Toggle aria-controls="basic-navbar-nav" />  
      <Navbar.Collapse id="basic-navbar-nav">  
        <Nav className="me-auto">  
          <Nav.Link href="/">Home</Nav.Link>  
          <Nav.Link href="/">Link</Nav.Link>  
        </Nav>  
      </Navbar.Collapse>  
    </Container>  
  </Navbar>  
  );  
}  
export default Nav1;  