module.exports = {
  pathPrefix: `/design-system-code`,
  siteMetadata: {
    title: 'Aurora',
    langs: ['en', 'fr'],
    defaultLangKey: 'en'
  },
  plugins: [

    'gatsby-plugin-react-helmet',

    // 'gatsby-plugin-eslint', STILL INSTALLED
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/docs`,
        name: `markdown-pages`,
      },
    },
    
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        precision: 10
      },
    },
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyDefault: 'en',
        useLangKeyLayout: false
      },
    },

    // Image processing plugins

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/img/`
      }
    }
  ],

}
