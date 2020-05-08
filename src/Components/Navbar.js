import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,

} from 'reactstrap';
import logo from '../assets/Smulogo.jpeg'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar expand="md" className='Navbar' >

        <NavbarBrand href="/">
          <img src={logo} id='logo' />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className='nav-item'>
              <NavLink href="/home/">Home</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/about">About</NavLink>
            </NavItem>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Gallery
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Boys Team
                </DropdownItem>
                <DropdownItem>
                  Girls Team
                </DropdownItem>
                <DropdownItem>
                  Staff
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="/contact">Contact</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/blog">Blog</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/staff">Staff</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/achieve">Achievements</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;
