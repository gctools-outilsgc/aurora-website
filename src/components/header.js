import React from 'react'
import { Link } from 'gatsby'
import { Navbar, Nav, NavItem, Button, ButtonGroup } from 'reactstrap'
import SelectLanguage from './SelectLanguage'

const Header = ({ siteTitle, lang }) => (
  <div class="container-fluid">
    <Navbar dark color="primary" expand="md">
      <Link to="/" className="navbar-brand">
        {' '}
        {siteTitle}{' '}
      </Link>
      <div className="navbar-collapse">
        <Nav navbar>
          <NavItem>
            <Link to="/overview/whats-new" class="nav-link">
              Overview
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/" class="nav-link">
              Identity
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/component/badges" class="nav-link">
              Components
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/" className="nav-link">
              Content
            </Link>
          </NavItem>
        </Nav>
      </div>
      <ButtonGroup className="mr-auto">
            <Button>EN</Button>
            <Button>FR</Button>
          </ButtonGroup>
    </Navbar>
  </div>
)

export default Header
