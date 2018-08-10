import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import {
  Navbar,
  Nav,
  NavItem,
  NavbarBrand
} from 'reactstrap';
import LanguageSelector from '@gctools-components/language-selector'
import LocalizedComponent
  from '@gctools-components/react-i18n-translation-webpack';
  import Search from './Search';

const Header = ({ siteTitle }) => (
  <div className="container-fluid">
    <Navbar dark color="primary" expand="md" fixed="top">
      <Link to="/#!" className="navbar-brand">
        {' '}
        {siteTitle}{' '}
      </Link>
      <div className="navbar-collapse">
        <Nav navbar>
          <NavItem>
            <Link to="/overview/about/whats-new" class="nav-link">
              {__('Overview')}
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/#!" class="nav-link">
              {__('Identity')}
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/component/standard/badges" class="nav-link">
              {__('Components')}
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/content/visuals/typography" className="nav-link">
              {__('Content')}
            </Link>
          </NavItem>
        </Nav>
      </div>
      <Search classNames={'link_bold'}/>
      <LanguageSelector />

    </Navbar>
  </div>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: 'Aurora',
};

export default LocalizedComponent(Header);
