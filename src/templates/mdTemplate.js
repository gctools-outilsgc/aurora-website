import React from 'react';
import rehypeReact from 'rehype-react';
import { Badge } from 'reactstrap';
import { graphql } from 'gatsby';

import Sidenav from '../components/sidenav';
import Layout from '../components/layout';
import LocalizedComponent
  from '@gctools-components/react-i18n-translation-webpack';
import { Container, Row, Col } from 'reactstrap';

const Template = ({
  data, // this prop will be injected by the GraphQL query below.
}) => {
  const { eng, fr } = data;
  const { frontmatter: { path } } = eng;
  const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: { badge: Badge }, //Allows in-markdown render of the Badge component from reactstrap
  }).Compiler;
  return (
    <Layout>
      <Row>
        <Col xs="3">
          <Sidenav path={path} />
        </Col>
        <Col>
          {(localizer.lang === "en_CA") ?
            <div className="col-sm">{renderAst(eng.htmlAst)}</div> :
            <div className="col-sm">{renderAst(fr.htmlAst)}</div>
          }
        </Col>
      </Row>
    </Layout>
  );
}

export default LocalizedComponent(Template);
export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    eng:markdownRemark(frontmatter: { path: { eq: $path }, lang: {eq: "en"} }) {
      html
      htmlAst
      frontmatter {
        path
        lang
      }
    }
    fr:markdownRemark(frontmatter: { path: { eq: $path }, lang: {eq: "fr"} }) {
      html
      htmlAst
      frontmatter {
        path
        lang
      }
    }
  }
`;
