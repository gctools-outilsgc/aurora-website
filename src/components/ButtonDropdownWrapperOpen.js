import React, { Component } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap';
import { translate } from 'react-i18next';

class ButtonDropdownWrapperOpen extends React.Component {
  constructor(props) {
    super(props);

    this.title = "";
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: true
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <ButtonDropdown isOpen="true">
        <Button id="caret" color="primary">{this.props.title}</Button>
        <DropdownToggle caret color="primary" />
        <DropdownMenu>
          <DropdownItem>Action 1</DropdownItem>
          <DropdownItem>Action 2</DropdownItem>
          <DropdownItem>Action 3</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}

export default translate('ButtonDropdownWrapperOpen')(ButtonDropdownWrapperOpen);
