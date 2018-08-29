import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import {
  Navbar,
  Nav,
  NavItem,
  Container,
} from 'reactstrap';
import Search from './search';
import LanguageSwitch from './languageSwitch';
import { translate } from "react-i18next";
const Header = ({ siteTitle, t, i18n }) => (
  <Container fluid>
    <Navbar dark color="primary" expand="md" fixed="top">
      <Link to="/#!" className="navbar-brand">
        {' '}
        {siteTitle}{' '}
      </Link>
      <div className="navbar-collapse">
        <Nav navbar>
          <NavItem>
            <Link to="/overview/whats-new" className="nav-link">
              {t("Overview")}
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/#!" className="nav-link">
              {t("Identity")}
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/component/badges" className="nav-link">
              {t("Component")}
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/content/content-guidelines" className="nav-link">
              {t("Content")}
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/content/data/data-overview" className="nav-link">
              {t("Data")}
            </Link>
          </NavItem>
        </Nav>
      </div>
      <Search
        lng={(i18n.language === "en") ? "en" : "fr"}
        placeholder={(i18n.language === "en") ? "Search" : "Chercher"}
      />
      <LanguageSwitch />
    </Navbar>
  </Container>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: 'Aurora',
};

export default translate("PageHeader")(Header);
