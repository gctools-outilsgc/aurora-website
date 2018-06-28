import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';
import Header from './header'
import '../utils/custom.scss'


const Layout = ({ children, data, location }) => (

  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            langs
            defaultLangKey
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
        <Header siteTitle={data.site.siteMetadata.title} lang={data.site.siteMetadata} />
        <div class="container-fluid">{children}</div>
      </>
    )}
  />

)

Layout.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Layout
