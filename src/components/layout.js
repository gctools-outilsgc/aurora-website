import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Header from './header';
import '../utils/custom.scss';
import { Container } from 'reactstrap';
import { I18nextProvider } from 'react-i18next';
import i18n from '../components/i18n';


const Layout = ({ children }) => (
  <I18nextProvider i18n={ i18n }>
    <div>
      <Helmet
        title="Aurora"
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <Header siteTitle="Aurora"/>
      <Container fluid>{children}</Container>
    </div>
  </I18nextProvider>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
