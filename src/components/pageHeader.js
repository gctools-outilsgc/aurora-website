import React, { Component } from "react";
import { translate } from "react-i18next";

class PageHeader extends Component {
  render() {
    const { t, i18n } = this.props;

    return (
      <div className="PageHeader">
        <h2>{t("heading")}</h2>
        <p>{t("description")}</p>
        {i18n.language}
      </div>
    );
  }
}

export default translate("PageHeader")(PageHeader);