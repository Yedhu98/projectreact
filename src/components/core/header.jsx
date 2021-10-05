
import React from "react"
import { Link } from "react-router-dom"
import{ Navbar } from "react-bootstrap";
import  {Nav} from "react-bootstrap";
import { Container } from "react-bootstrap";

class Header extends React.Component {
  render() {
    return (
      
      <div>
          <h1 style={{ marginLeft: '600px',color:'red'}}><b>STATE LIBRARY</b></h1>
     <Navbar bg="dark" variant="dark">
    <Container>
    
    <Nav className="me-auto">
      <Nav.Link >  <Link  to="/library">Home</Link></Nav.Link>
      <Nav.Link ><Link to="/viewbook">ViewBook</Link></Nav.Link>
      <Nav.Link ><Link  to="/addbook">AddBook</Link></Nav.Link>
      <Nav.Link ><Link  to="/viewdetails">ViewDetails</Link></Nav.Link>
      <Nav.Link ><Link  to="/adddetails">AddDetails</Link></Nav.Link>
      <Nav.Link ><Link  to="/viewmember">ViewMember</Link></Nav.Link>
      <Nav.Link ><Link  to="/addmember">AddMember</Link></Nav.Link>
    </Nav>
    </Container>
  </Navbar>
     
  {/* //   </Nav> */}
  {/* //   </Container> */}
  {/* // </Navbar> */}
      
     
        
      </div>



    )
  }
}

export default Header;

