import React, { Component } from "react";
import { Button } from 'reactstrap';
import { translate } from "react-i18next";

class LanguageSwitcher extends Component {
  constructor(props) {
    super(props);
    this.state = { isEnglish: (props.i18n.language === "en") ? true : false };

    this.handleChangeLanguage = this.handleChangeLanguage.bind(this);
  }

  handleChangeLanguage() {
    this.props.i18n.changeLanguage(this.state.isEnglish ? "fr" : "en");
    this.setState(prevState => ({
      isEnglish: !prevState.isEnglish
    }));
  }

  render() {
    return (
      <div className="LanguageSwitcher">
        <Button
          className="languageSwitcherButton"
          onClick={this.handleChangeLanguage}
          size="lg"
          style={ {"font-weight": "550"} }
        >
        {this.state.isEnglish ? 'FR' : 'EN'}
        </Button>
      </div>
    );
  }

}

export default translate("LanguageSwitcher")(LanguageSwitcher);