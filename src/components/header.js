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
import { I18n } from 'react-i18next';
import fip from '../img/sig-alt-en.png';
import logo from '../img/OADW_placeholder_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import './header.scss';

const Header = ({ path }) => {
  /*
  /* Something was wrong with v1's gatsby-link so instead I am passing down the path and
  /* using it to determine the active tab the way we had it done before was more broken than this way.
  /* In the v2 version if you clicked away active status was lost.
  */
  if (path) {
    if (path.length >= 14) {
      if (path.substr(0, 14) === '/notifications') path = '/notifications';
    }
    if (path.length >= 13) {
      if (path.substr(0, 13) === '/architecture') path = '/architecture';
    }
    if (path.length >= 9) {
      if (path.substr(0, 9) === '/overview') path = '/overview';
    }
    if (path.length >= 8) {
      if (path.substr(0, 8) === '/profile') path = '/profile';
    }
  }

  return (
    <I18n ns={['translation']}>
      {
      (t, { i18n }) => (
        <header className="fixed-top bg-white shadow-sm" role="banner">
          <div>
            <div style={{ height: '50px', padding: '10px' }}>
              <img src={fip} alt={t('GovernmentofCanada')} />
              <div className="float-right">
                <span className="float-left mr-3 d-none d-md-block">
                  <Search
                    lng={(i18n.language === 'en') ? 'en' : 'fr'}
                    placeholder={(i18n.language === 'en') ? 'Search' : 'Chercher'}
                    section="desktop"
                    />
                </span>
                <span className="float-right">
                  <LanguageSwitcher i18n={i18n} />
                </span>
              </div>
            </div>
          </div>
          <div>
            <Navbar color="white" expand className="main-nav" style={{ paddingBottom: '0', paddingRight: '0' }} aria-label={t('MainNavigation')} role="navigation">
              <Link to="/#!" className="text-dark logo">
                <img src={logo} alt="Logo" className="float-left" style={{ width: '30px', margin: '5px' }} />
                <span className="h2 d-none d-md-block float-left font-weight-normal">
                  {' '}
                  {'Quantum'}{' '}
                </span>
              </Link>
              <div className="navbar-collapse nav-holder">
                <Nav tabs className="mx-auto nav-site scroll" style={{ borderBottom: 'none' }} >
                  <NavItem>
                    <Link to="/overview/introduction" className={(path == '/overview') ? 'nav-link active-header-tab' : 'nav-link'}>
                      {t('Overview')}
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/architecture/introduction" className={(path == '/architecture') ? 'nav-link active-header-tab' : 'nav-link'}>
                      {t('Architecture')}
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/profile/introduction" className={(path == '/profile') ? 'nav-link active-header-tab' : 'nav-link'}>
                      {t('Profile as a Service')}
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/notifications/introduction" className={(path == '/notifications') ? 'nav-link active-header-tab' : 'nav-link'}>
                      {t('Notifications as a Service')}
                    </Link>
                  </NavItem>
                </Nav>
              </div>
              <Nav className="ml-auto" navbar>
                <NavItem className="d-none d-md-block">
                  <NavLink style={{ color: 'black', width: '48px', height: '44px' }} target="_blank" href="https://github.com/gctools-outilsgc"><FontAwesomeIcon style={{ fontSize: '1.5em' }} icon={faGithub} /><span className="sr-only">GitHub</span></NavLink>
                </NavItem>
              </Nav>
            </Navbar>
          </div>

        </header>
      )
    }
    </I18n>
  );
};

export default Header;
