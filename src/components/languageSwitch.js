import React, { Component } from "react";
import { Button } from 'reactstrap';
import { translate } from "react-i18next";

class LanguageSwitcher extends Component {
  constructor(props) {
    super(props);
    const { i18n } = this.props;
    this.state = { language: i18n.language };

    this.handleChangeLanguage = this.handleChangeLanguage.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ language: nextProps.i18n.language });
  }

  handleChangeLanguage() {
    const { i18n } = this.props;
    if (this.state.language == "en") {
      i18n.changeLanguage("fr");
    } else {
      i18n.changeLanguage("en");
    }
  }

  renderLanguageChoice() {

    if (this.state.language == "en")
      var lang = "FR";
    else 
      var lang = "EN";

    return (
      <Button
        className="languageSwitcherButton"
        onClick={this.handleChangeLanguage}
        size="lg"
        style={ {"font-weight": "550"} }
      >
      {lang}
      </Button>
    );
  }

  render() {
    return (
      <div className="LanguageSwitcher">
        {this.renderLanguageChoice(this.state.language)}
      </div>
    );
  }
}

export default translate("LanguageSwitcher")(LanguageSwitcher);