import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import LocalizedComponent
  from '@gctools-components/react-i18n-translation-webpack';
import {
  Nav,
  NavItem
} from 'reactstrap';

const Sidenav = (props) => (
  <div className="col-sm-auto">
    <Nav vertical navbar justify>
      <NavItem>
        <Link to="/component/badges" class="nav-link">
          Badges
        </Link>
      </NavItem>
      <NavItem>
        <Link to="/component/search" class="nav-link">
          Search
        </Link>
      </NavItem>
      <NavItem>
        <Link to="/component/" class="nav-link">
          Components
        </Link>
      </NavItem>
      <NavItem>
        <Link to="/" class="nav-link">
          Content
        </Link>
      </NavItem>
      <NavItem>
        <Link to="/" class="nav-link">
          Data
        </Link>
      </NavItem>
    </Nav>
  </div>
);

Sidenav.propTypes = {
  data: PropTypes.string,
};

Sidenav.defaultProps = {
  data: 'Data',
};

export default LocalizedComponent(Sidenav);
