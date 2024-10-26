import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Style from './navbar.module.css';
import Logo from './logo';

function TopMenu() {
  return (
    <Navbar expand="lg" className={Style.navbar}>
      
    <div className={Style.espaco}>
    <Logo/>
    </div>
   
    <div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={Style.link}>
            <Nav.Link href="#link" >Nossa História</Nav.Link>
            <Nav.Link href="#link">Serviços</Nav.Link>
            <NavDropdown title="Produtos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Contato</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </div>
    </Navbar>
  );
}

export default TopMenu;
