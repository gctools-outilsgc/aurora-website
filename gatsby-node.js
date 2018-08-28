/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path");
const fs = require("fs-extra");

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
              num
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
          component: blogPost,

        })
      })
    })
};

exports.onPostBuild = () => {
  console.log("Copying locales");
  fs.copySync(
    path.join(__dirname, "/src/locales"),
    path.join(__dirname, "/public/locales"),
    path.join(__dirname, "/src/img")
  );
};