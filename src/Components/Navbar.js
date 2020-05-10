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
import Contact from './contact';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import About from './about';


class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      req_tab: ""
    }
  }


  render() {
    // const   [isOpen, setIsOpen] = useState(false);
    // const toggle = () => setIsOpen(!isOpen);


    return (
      <div>
        <div className="Navstyle">
          <Navbar expand="md" className='Navbar' >

            <NavbarBrand >
              <img src={logo} id='logo' />
            </NavbarBrand>
            <NavbarToggler />
            <Collapse navbar>
              <Nav className="ml-auto" navbar>
                <NavItem className='nav-item'>
                
                  <NavLink to="/contact" onClick={(e) => this.setState({ req_tab: 'home' })}>Home</NavLink>
                
                </NavItem>

                <NavItem>
                  <NavLink onClick={(e) => this.setState({ req_tab: 'about' })}>About</NavLink>
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
                  <NavLink onClick={(e) => this.setState({ req_tab: 'contact' })}>Contact</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={(e) => this.setState({ req_tab: 'blog' })}>Blog</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={(e) => this.setState({ req_tab: 'staff' })}>Staff</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={(e) => this.setState({ req_tab: 'achivements' })}>Achievements</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
        <div>
          {this.req_tab !== "" ? ((() => {
            switch (this.state.req_tab) {
              case 'contact':
                return <Contact />
              case 'about':
                return <About />
              case 'home':
                return <div />

              default:
                return <About />
            }
          })()) : (<div></div>)}
        </div>

      </div>


    );
  }
}
export default NavBar;
