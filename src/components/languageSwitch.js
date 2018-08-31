import React, { Component } from "react";
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { I18n } from 'react-i18next';

class LanguageSwitcher extends Component {
  constructor(props) {
    super(props);
    this.state = { isEnglish: (props.i18n.language === "en") ? true : false };

    this.handleChangeLanguage = this.handleChangeLanguage.bind(this);
  }

  handleChangeLanguage(i18n) {
    i18n.changeLanguage(this.state.isEnglish ? "fr" : "en");
    this.setState(prevState => ({
      isEnglish: !prevState.isEnglish
    }));
  }

  render() {
    return (
      <I18n>
        {
          (t, { i18n }) => (
            <Button
              className="languageSwitcherButton"
              onClick={ () => this.handleChangeLanguage(i18n) }
              size="md"
              style={ {"fontWeight": "550"} }
            >
              {this.state.isEnglish ? 'FR' : 'EN'}
            </Button>
          )
        }
      </I18n>
    );
  }

}

LanguageSwitcher.propTypes = {
  i18n: PropTypes.object
};


export default LanguageSwitcher;