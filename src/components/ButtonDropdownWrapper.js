import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { I18n } from "react-i18next";

class ButtonDropdownWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
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
            <ButtonDropdown direction="down" isOpen={this.state.dropdownOpen} toggle={this.toggle} style={{marginBottom: '15px'}} color={this.props.color}>
              <DropdownToggle caret {...this.props}>
                {t("Reply")}
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

export default ButtonDropdownWrapper;
