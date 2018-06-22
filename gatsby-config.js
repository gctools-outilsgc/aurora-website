module.exports = {
  pathPrefix: '/gatsby-testing',
  siteMetadata: {
    title: 'Carlenseum',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
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
