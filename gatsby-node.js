/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")
//const { createFilePath } = require('gatsby-source-filesystem')

/* exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode })
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
  }
} */

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPost = path.resolve(`src/templates/mdTemplate.js`)
  return graphql(`
    {
      allMarkdownRemark
         {
        edges {
          node {
            frontmatter {
              path
              lang
              title
            }
          }
        }
      }
    }
  `).then(result => {
      console.log(result)
      if (result.errors) {
        return Promise.reject(result.errors)
      }

      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        console.log(node)
        createPage({
          path: node.frontmatter.path,
          component: blogPost,
        })
      })
    })
};

const I18nTranslationWebpackPlugin =
  require('@gctools-components/i18n-translation-webpack-plugin');
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({

    plugins: [
      new I18nTranslationWebpackPlugin({
        extract_text_exclude: /node_modules|.cache|components\/Search/,
        localizer_window: 'localizer',
      }),
    ],
  });
};