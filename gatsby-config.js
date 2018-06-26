module.exports = {
  pathPrefix: '/gatsby-testing',
  siteMetadata: {
    title: 'DCD Design System',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-mdx',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/docs`,
        name: `markdown-pages`,
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        precision: 10,
      },
    },
    
   
  ],
}
