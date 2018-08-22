import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import {
  Navbar,
  Nav,
  NavItem,
  Container,
} from 'reactstrap';
import Search from './search'
import LanguageSelector from '@gctools-components/language-selector'
import LocalizedComponent
  from '@gctools-components/react-i18n-translation-webpack';

const Header = ({ siteTitle }) => (
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
              {__('Overview')}
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/#!" className="nav-link">
              {__('Identity')}
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/component/badges" className="nav-link">
              {__('Components')}
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/content/content-guidelines" className="nav-link">
              {__('Content')}
            </Link>
          </NavItem>
        </Nav>
      </div>
      <Search
        lng={(localizer.lang === "en_CA") ? "en" : "fr"}
        placeholder={(localizer.lang === "en_CA") ? "Search" : "Chercher"}
      />
      <LanguageSelector />

    </Navbar>
  </Container>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: 'Aurora',
};

export default LocalizedComponent(Header);
