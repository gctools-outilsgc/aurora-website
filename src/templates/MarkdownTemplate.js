import React from "react";
import { Row, Col} from 'reactstrap';
import Layout from '../layouts/layout';
import { I18n } from "react-i18next";
import Sidenav from "../components/Sidenav";
import MarkdownRenderer from '../components/MarkdownRenderer';


class MarkdownTemplate extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      eng: this.props.data.eng,
      fr: this.props.data.fr,
      path: this.props.data.eng.frontmatter.path,
      markdown: null
    }
  }

  render() {
    return (
      <Layout>
        <I18n ns={["translation"]}>
          {
            (t, i18n) => {
              console.log(i18n.lng);
              return( 
                <Row>
                  <Col xs="3">
                    <Sidenav path={this.state.path} data={this.props.data} i18n={ i18n } />
                  </Col>
                  <Col>
                    {
                      <MarkdownRenderer eng={this.state.eng} fr={this.state.fr} lang={i18n.lng} />
                    }
                  </Col>
                </Row>
              )
            }
          }
        </I18n>
      </Layout>
    );
  }
}

export default MarkdownTemplate;

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
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
    component:allMarkdownRemark(
      filter: {
        frontmatter: {path: {regex: "/\/component\//"}}
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
    content:allMarkdownRemark(
      filter: 
      {frontmatter: {path: {regex: "/\/content\//"}}
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
    data:allMarkdownRemark(
      filter: {
        frontmatter: {path: {regex: "/\/data\//"}}
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
`