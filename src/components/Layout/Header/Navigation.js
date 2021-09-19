import { Navbar,Container,Nav, NavDropdown } from "react-bootstrap";
import logo from "../../../assets/images/logo.webp"
const Navigation=({handleShow})=>{
    return(<>
         <Navbar  variant="dark">
            <Container fluid>
            <Navbar.Brand href="#home">
            <img
              src={logo}
              width="80"
              height="55"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            </Navbar.Brand>
            
            <Nav className="justify-content-center navbar-center-manu">
            <Nav.Link href="#home">DOCTORS</Nav.Link>
            <Nav.Link href="#features">PHARMACY</Nav.Link>
            <Nav.Link href="#features">LAB TESTS</Nav.Link>
            <Nav.Link href="#pricing">COVID-19</Nav.Link>
            </Nav>
            <Nav className="justify-content-end nav-login">
              <Nav.Link href="#">
              <div class="jss23 ">
                <div class="jss13 jss16 ">
                  <div id="loginPopup" onClick={handleShow} class="jss17 jss18" title="Login/SignUp">
                    <span class="icon-ic_account"></span>
                  </div>
                  </div>
               </div>
              </Nav.Link>
            </Nav>
            </Container>
         </Navbar>
        </>);
}
export default Navigation;