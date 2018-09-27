import React, { Component } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap';
import { translate, I18n } from 'react-i18next';

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
      <I18n ns={["translation"]}>
        {
          (t, { i18n }) => (
              <ButtonDropdown direction="down" isOpen="true" toggle={this.toggle} style={{marginBottom: '15px'}} color={this.props.color}>
                <DropdownToggle caret {...this.props}>
                  {t("Pressed")}
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Action 1</DropdownItem>
                  <DropdownItem>Action 2</DropdownItem>
                  <DropdownItem>Action 3</DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>
          )
        }
      </I18n>
    );
  }
}


export default translate('ButtonDropdownWrapperOpen')(ButtonDropdownWrapperOpen);
