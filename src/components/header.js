import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import {
  Navbar,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import Search from './search';
import LanguageSwitch from './languageSwitch';
import { translate } from "react-i18next";
import fip from "../img/sig-alt-en.png";
import logo from "../img/aurora_logo.png";
const Header = ({ siteTitle, t, i18n }) => (
  <div className="fixed-top bg-white shadow-sm">
  <div>
    <div style={{height:'50px', padding:'10px'}}>
      <img src={fip} alt="FIP"/>
      <div className="float-right">
          <span className="float-left mr-3 d-none d-md-block">
            <Search
              lng={(i18n.language === "en") ? "en" : "fr"}
              placeholder={(i18n.language === "en") ? "Search" : "Chercher"}
            />
          </span>
          <span className="float-right">
            <LanguageSwitch />
          </span>
        </div>
    </div>
  </div>
  <div>
    <Navbar color="white" expand className="main-nav" style={{paddingBottom:'0'}}>
      <Link to="/#!" className="text-dark logo">
        <img src={logo} alt="Logo" className="float-left" style={{width:'30px', margin:'5px'}} />
        <span className="h2 d-none d-md-block float-left">
          {' '}
          {siteTitle}{' '}
        </span>
      </Link>
      <div className="navbar-collapse nav-holder">
        <Nav tabs className="mx-auto nav-site scroll" style={{borderBottom:'none'}}>
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
            <Link to="/component/badges" className="nav-link active">
              {t("Components")}
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/content/content-guidelines" className="nav-link">
              {t("Content")}
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/data/data-overview" className="nav-link">
              {t("Data")}
            </Link>
          </NavItem>
        </Nav>
      </div>
        <Nav className="ml-auto" navbar>
          <NavItem className="d-none d-md-block">
            <NavLink href="#!">GH</NavLink>
          </NavItem>
          <NavItem className="d-none d-md-block">
            <NavLink href="#!">DWNLD</NavLink>
          </NavItem>
        </Nav>
    </Navbar>
  </div>

  </div>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: 'Aurora',
};

export default translate("PageHeader")(Header);
