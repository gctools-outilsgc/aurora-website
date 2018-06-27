import React from 'react'
import { Link } from 'gatsby'
import {
  Navbar,
  Nav,
  NavItem,
} from 'reactstrap'

const Header = ({ siteTitle }) => (
  <div class="container-fluid">
    <Navbar dark color="primary" expand="md" >

      <Link to="/" class="navbar-brand"> {siteTitle} </Link>
      <div class="navbar-collapse " id="navbarSupportedContent">
        <Nav navbar >
          <NavItem>
            <Link to="/" class="nav-link">Overview</Link>
          </NavItem>
          <NavItem>
            <Link to="/" class="nav-link" >Identity</Link>
          </NavItem>
          <NavItem >
            <Link to="/component" class="nav-link" >Components</Link>
          </NavItem>
          <NavItem >
            <Link to="/" class="nav-link" >Content</Link>
          </NavItem>
          <NavItem >
            <Link to="/" class="nav-link" >Data</Link>
          </NavItem>
        </Nav>
      </div>

    </Navbar>


  </div>
)

export default Header
