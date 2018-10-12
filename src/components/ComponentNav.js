// This component is just for documentation
import React from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';

class ComponentNav extends React.Component {
  render() {
    if (!this.props.react)
      return(
        <Nav tabs>
          <NavItem>
            <NavLink href={this.props.cssLink} active>CSS</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href={this.props.reactLink}>React</NavLink>
          </NavItem>
        </Nav>
      );
    else 
      return(
        <Nav tabs>
          <NavItem>
            <NavLink href={this.props.cssLink} >CSS</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href={this.props.reactLink} active>React</NavLink>
          </NavItem>
        </Nav>
      );
  }
}

export default ComponentNav;