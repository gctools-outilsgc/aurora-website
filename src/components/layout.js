import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import Header from './header';
import '../utils/custom.scss';
import { Container } from 'reactstrap';
import '../components/i18n';
import './layout.scss';

const Layout = ({ children }) => (

  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <Header siteTitle={data.site.siteMetadata.title}/>
        <w-screen mt-4 fluid id = "container">{children}</w-screen>
      </>
    )}
  />

);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
