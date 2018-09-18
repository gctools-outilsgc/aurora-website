import React from 'react';
import i18n from '../i18n/i18n';
import { I18nextProvider } from 'react-i18next';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/header';
import '../utils/custom.scss';
import './layout.scss';

import icon from "../img/favicon.ico";

class Layout extends React.Component {
  render() {
    return(
      <I18nextProvider i18n={ i18n }>
        <div>
          <Helmet
            title={"Aurora"}
            meta={[
              { name: 'description', content: 'Sample' },
              { name: 'keywords', content: 'sample, something' },
            ]}
            link={[
              { rel: 'shortcut icon', type: 'image/png', href: icon }
            ]}
          >
            <link rel="shortcut icon" href={icon} type="image/png" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.15.0/themes/prism.min.css" />
          </Helmet>
          <div style={{position:'fixed', zIndex:'99999', top: '0', left: '45%'}}>
            <a className="sr-only sr-only-focusable aurora-skip" href="#main-content">Skip to main content</a>
          </div>
          <Header path={(this.props.path) ? this.props.path : null}/>
          <w-screen mt-4 fluid id="container">
            {this.props.children}
          </w-screen>
        </div>
      </I18nextProvider>
    );
  }
} 

Layout.propTypes = {
  children: PropTypes.element.isRequired,
  path: PropTypes.string
};

export default Layout;