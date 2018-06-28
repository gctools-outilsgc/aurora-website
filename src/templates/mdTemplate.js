import React from 'react'
import SideNav from '../components/sidenav'
import Layout from '../components/layout'
import rehypeReact from 'rehype-react'
import { Badge } from 'reactstrap'
import { StaticQuery,graphql } from 'gatsby'
export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html, htmlAst } = markdownRemark
  const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: { badge: Badge },
  }).Compiler
  return (
    <Layout>
      <div class="row">
        <SideNav />

        <div class="col-sm">{renderAst(htmlAst)}</div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      htmlAst
      frontmatter {
        path
      }
    }
  }
`
