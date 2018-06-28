import React from 'react'
import Link from 'gatsby-link'

import {
  Navbar,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItems,
} from 'reactstrap'

const SideNav = ({ data }) => (
  <div class="col-sm-auto">
    <Nav vertical navbar justify>
      <NavItem>
        <Link to="/component/badges" class="nav-link">
          badges
        </Link>
      </NavItem>
      <NavItem>
        <Link to="/" class="nav-link">
          Identity
        </Link>
      </NavItem>
      <NavItem>
        <Link to="/component/" class="nav-link">
          Components
        </Link>
      </NavItem>
      <NavItem>
        <Link to="/" class="nav-link">
          Content
        </Link>
      </NavItem>
      <NavItem>
        <Link to="/" class="nav-link">
          Data
        </Link>
      </NavItem>
    </Nav>
  </div>
)
export default SideNav
