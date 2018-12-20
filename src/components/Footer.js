import React from 'react';
import { I18n } from "react-i18next";
import { Container } from 'reactstrap';
import Link from 'gatsby-link';
import Watermark from '../img/wmms-spl.svg';

const Footer = () => {

  return(
    <I18n ns={["translation"]}>
      {
        (t, { i18n }) => (
          <footer className="footer">
            <Container className="foot-container">
              <ul>
                <li><a href="https://github.com/gctools-outilsgc/design-system">GitHub</a></li>
                <li><Link to="/overview/download">{t("Download")}</Link></li>
              </ul>
              <img style={{"width":"160px"}} className="float-right pb-3" src={Watermark} alt={t("CanadaSymbol")} />
            </Container>
          </footer>
        )
      }
    </I18n>
  );
}

export default Footer;
