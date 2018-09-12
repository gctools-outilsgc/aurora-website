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
    const langCheck = this.state.isEnglish;
    let langText;

    if(langCheck) {
      langText = <span><span aria-hidden="true">FR</span><span className="sr-only" lang="fr">français</span></span>
    } else {
      langText = <span><span aria-hidden="true">EN</span><span className="sr-only" lang="en">english</span></span>
    }
    return (
      <div className="LanguageSwitcher">
        <Button
          color="primary"
          className="languageSwitcherButton"
          onClick={this.handleChangeLanguage}
          size="md"
          style={ {"font-weight": "550"} }
        >
        {langText}
        </Button>
      </div>
    );
  }

}

export default translate("default")(LanguageSwitcher);