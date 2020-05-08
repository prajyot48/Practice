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


class NavBar extends React.Component {
  constructor(props){
    super(props)
    this.state={
      req_tab: ""
    }
  }
  
  
  render(){
    // const   [isOpen, setIsOpen] = useState(false);
    // const toggle = () => setIsOpen(!isOpen);
    

  return (
    <div>
    <div>
      <Navbar expand="md" className='Navbar' >

        <NavbarBrand href="/">
          <img src={logo} id='logo' />
        </NavbarBrand>
        <NavbarToggler  />
        <Collapse  navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className='nav-item'>
              <NavLink onClick={(e)=>this.setState({req_tab:'home'})}>Home</NavLink>
            </NavItem>

            <NavItem>
              <NavLink onClick={(e)=>this.setState({req_tab:'about'})}>About</NavLink>
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
              <NavLink onClick={(e)=>this.setState({req_tab:'contact'})}>Contact</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={(e)=>this.setState({req_tab:'blog'})}>Blog</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={(e)=>this.setState({req_tab:'staff'})}>Staff</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={(e)=>this.setState({req_tab:'achivements'})}>Achievements</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
    <div>
     {/* { (()=>{
      switch (this.state.req_tab) {
        case 'contact':
          return <Contact/>
        case 'blog':
          return <Contact/>
        case 'home':
          return <Contact/>
              
        default:
          return <Footer/>
          } */}
      // {this.state.req_tab==="contact"?<Contact/>:<div></div>}
        {/* })} */}
    </div>
    
    </div>


  );
}
}
export default NavBar;
