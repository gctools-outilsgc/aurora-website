import React, { Component } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { translate } from 'react-i18next';

class ButtonDropdownWrapperOpen extends React.Component {
  constructor(props) {
    super(props);

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
      <ButtonDropdown direction="down" isOpen="true" toggle={this.toggle} style={{marginBottom: '15px'}} color={this.props.color}>
        <DropdownToggle caret {...this.props}>
          Pressed
        </DropdownToggle>
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
