/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 // You can delete this file if you're not using it
 const path = require("path")

 exports.createPages = ({ actions, graphql }) => {
   const { createPage } = actions
 
   const blogPostTemplate = path.resolve(`src/templates/mdTemplate.js`)
 
   return graphql(`
     {
       allMarkdownRemark
          {
         edges {
           node {
             frontmatter {
               path
               lang
             }
           }
         }
       }
     }
   `).then(result => {
     if (result.errors) {
       return Promise.reject(result.errors)
     }
 
     result.data.allMarkdownRemark.edges.forEach(({ node }) => {
       createPage({
         path: node.frontmatter.path,
         component: blogPostTemplate,
         
       })
     })
   })
 }

 const I18nTranslationWebpackPlugin =
  require('@gctools-components/i18n-translation-webpack-plugin');
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    plugins: [
      new I18nTranslationWebpackPlugin({
        extract_text_exclude: /node_modules|.cache/,
        localizer_window: 'localizer',
      }),
    ],
  });
};