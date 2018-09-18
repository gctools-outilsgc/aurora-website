import React from 'react';
import Link from 'gatsby-link';
import {
  Navbar,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import Search from './search';
import LanguageSwitcher from './LanguageSwitcher';
import { I18n } from "react-i18next";
import fip from "../img/sig-alt-en.png";
import logo from "../img/aurora_logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const Header = () => (
  <I18n ns={["translation"]}>
    {
      (t, { i18n }) => (
        <header className="fixed-top bg-white shadow-sm" role="banner">
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
                    <LanguageSwitcher i18n={ i18n }/>
                  </span>
                </div>
            </div>
          </div>
          <div>
            <Navbar color="white" expand className="main-nav" style={{paddingBottom:'0'}} aria-label="Main Navigation *Translate*" role="navigation">
              <Link to="/#!" className="text-dark logo">
                <img src={logo} alt="Logo" className="float-left" style={{width:'30px', margin:'5px'}} />
                <span className="h2 d-none d-md-block float-left font-weight-normal">
                  {' '}
                  {'Aurora'}{' '}
                </span>
              </Link>
              <div className="navbar-collapse nav-holder">
                <Nav tabs className="mx-auto nav-site scroll" style={{borderBottom:'none'}} >
                  <NavItem>
                    <Link to="/overview/introduction" className="nav-link" activeClassName="active" >
                      {t("Overview")}
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/component/colour" className="nav-link" activeClassName="active" >
                      {t("Components")}
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/content/content-guidelines" className="nav-link" activeClassName="active" >
                      {t("Content")}
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/data/data-overview" className="nav-link" activeClassName="active" >
                      {t("Data")}
                    </Link>
                  </NavItem>
                </Nav>
              </div>
                <Nav className="ml-auto" navbar>
                  <NavItem className="d-none d-md-block">
                    <NavLink style={{"color":"black"}} target="_blank"  href="https://github.com/gctools-outilsgc/design-system"><FontAwesomeIcon style={{"fontSize":"1.5em"}} icon={faGithub} /><span className="sr-only">GitHub</span></NavLink>
                  </NavItem>
                  <NavItem className="d-none d-md-block">
                    <NavLink style={{"color":"black"}} target="_blank" href="https://github.com/gctools-outilsgc/design-system/blob/master/master_ui_kit.ai"><FontAwesomeIcon style={{"fontSize":"1.5em"}} icon={faDownload} /><span className="sr-only">{t("DownloadLink")}</span></NavLink>
                  </NavItem>
                </Nav>
            </Navbar>
          </div>

          </header>
      )
    }
  </I18n>
);

export default Header;