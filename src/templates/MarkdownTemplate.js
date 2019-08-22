import React from 'react';
import { Button, Collapse, Row } from 'reactstrap';
import Layout from '../layouts/layout';
import { I18n } from 'react-i18next';
import Sidenav from '../components/sidenav';
import Search from '../components/search';
import MarkdownRenderer from '../components/MarkdownRenderer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

class MarkdownTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      eng: this.props.data.eng,
      fr: this.props.data.fr,
      path: this.props.data.eng.frontmatter.path,
      markdown: null,
      collapse: false,
    };

    this.escFunction = this.escFunction.bind(this);
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  componentDidMount() {
    this.setState({ collapse: false });
    this.contentContainer.focus();
    document.addEventListener('keydown', this.escFunction, false);
  }

  escFunction(event) {
    if (event.keyCode === 27 && this.state.collapse == true) {
      this.setState({ collapse: false });
    }
  }

  render() {
    return (
      <Layout path={this.state.path}>
        <I18n ns={['translation']}>
          {
            (t, i18n) => (
              <div>
                <div
                  id="mobile-menu-holder"
                  className="d-sm-block d-md-none d-lg-none d-xl-none bg-primary"
                  style={{
padding: '6px', position: 'fixed', zIndex: '9999', top: '100px', width: '100%',
}}
                  >
                  <Row>
                    <Button color="primary" onClick={this.toggle} id="mobile-menu"><FontAwesomeIcon size="2x" icon={faBars} /><span className="sr-only">Menu</span></Button>
                    <Search
                      lng={(i18n.lng === 'en') ? 'en' : 'fr'}
                      placeholder={(i18n.lng === 'en') ? 'Search' : 'Chercher'}
                      section="mobile"
                        />
                  </Row>
                </div>
                <div>
                  <Collapse isOpen={this.state.collapse}>
                    <div className="mobile-sidebar">
                      <Sidenav path={this.state.path} data={this.props.data} i18n={i18n} />
                    </div>
                    <div onClick={this.toggle} className="ui-mask" />
                  </Collapse>
                </div>

                <div className="d-none d-md-block">
                  <Sidenav path={this.state.path} data={this.props.data} i18n={i18n} />
                </div>
                <div tabIndex="-1" ref={(contentContainer) => { this.contentContainer = contentContainer; }}>
                  {
                    <MarkdownRenderer eng={this.state.eng} fr={this.state.fr} lang={i18n.lng} />
                    }
                </div>
              </div>
              )
          }
        </I18n>
      </Layout>
    );
  }
}

export default MarkdownTemplate;

export const pageQuery = graphql`
  query MarkdownInfoByPath($path: String!) {
    eng:markdownRemark(frontmatter: { path: { eq: $path }, lang: {eq: "en"} }) {
      html
      htmlAst
      frontmatter {
        title
        path
        lang
      }
    }
    fr:markdownRemark(frontmatter: { path: { eq: $path }, lang: {eq: "fr"} }) {
      html
      htmlAst
      frontmatter {
        title
        path
        lang
      }
    }
    overview:allMarkdownRemark(
      filter:
        {frontmatter: {path: {regex: "/\/overview\//"}}
      },
      sort:{
        fields:[frontmatter___subnav]
      }
    ){
      totalCount
        edges{
          node {
            frontmatter {
              title
              path
              lang
              subnav
            }
          }
      }
    }
    architecture:allMarkdownRemark(
      filter: {
        frontmatter: {path: {regex: "/\/architecture\//"}}
      },
      sort:{
        fields:[frontmatter___subnav]
      }
    ){
      totalCount
        edges{
          node {
            frontmatter {
              title
              path
              lang
              subnav
            }
          }
      }
    }
    identity:allMarkdownRemark(
      filter: {
        frontmatter: {path: {regex: "/\/identity\//"}}
      },
      sort:{
        fields:[frontmatter___subnav]
      }
    ) {
      totalCount
        edges{
          node {
            frontmatter {
              title
              path
              lang
              subnav
            }
          }
      }
    }
    profile:allMarkdownRemark(
      filter: {
        frontmatter: {path: {regex: "/\/profile\//"}}
      },
      sort:{
        fields:[frontmatter___subnav]
      }
    ){
      totalCount
        edges{
          node {
            frontmatter {
              title
              path
              lang
              subnav
            }
          }
      }
    }
    notifications:allMarkdownRemark(
      filter: {
        frontmatter: {path: {regex: "/\/notifications\//"}}
      },
      sort:{
        fields:[frontmatter___subnav]
      }
    ){
      totalCount
        edges{
          node {
            frontmatter {
              title
              path
              lang
              subnav
            }
          }
      }
    }
  }
`;
