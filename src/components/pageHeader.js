import React, { Component } from "react";
import { I18n } from "react-i18next";

class PageHeader extends Component {
  render() {
    return (
      <I18n ns={ ["PageHeader"] }>
        {
          (t, { i18n }) => (
            <div className="PageHeader">
              <h2>{t("heading")}</h2>
              <p>{t("description")}</p>
              {i18n.language}
            </div>
          )
        }
      </I18n>
    );
  }
}

export default PageHeader;