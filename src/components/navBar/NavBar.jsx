import { Navbar, Nav, Button, Dropdown, Form, Collapse } from 'bootstrap-4-react';
import '../style/navBar.css'
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar expand="lg" >
        <Navbar.Toggler target="#navbarSupportedContent" />
        <Collapse navbar id="navbarSupportedContent">
          <Navbar.Nav >
       
          <Nav.Item dropdown active>
              <Nav.Link dropdownToggle>Proudct</Nav.Link>
              <Dropdown.Menu>
                <Dropdown.Item>Action</Dropdown.Item>
                <Dropdown.Item>Another action</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Nav.Item>
   
            <Nav.Item dropdown>
              <Nav.Link dropdownToggle>Solutions</Nav.Link>
              <Dropdown.Menu>
                <Dropdown.Item>Action</Dropdown.Item>
                <Dropdown.Item>Another action</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Nav.Item>
          
            <Nav.Item>
              <Link className='nav-link'  to="breeds">Breeds</Link>
            </Nav.Item>
            <Nav.Item>
              <Link className='nav-link' to="fact" >Facts</Link>
            </Nav.Item>
          </Navbar.Nav>
          <Form inline my="2 lg-0">
            <CiSearch className='search-icon' />
            <Form.Input type="search" placeholder="Search or jumb to.." mr="sm-2" />
            <Button className="sign-up"   my="2 sm-0">Sign up</Button>
            <Button  success my="2 sm-0">Sign in</Button>
          </Form>
        </Collapse>
      </Navbar>
  )
}

export default NavBar
