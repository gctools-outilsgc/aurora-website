module.exports = {
  pathPrefix: `/design-system-code`,
  siteMetadata: {
    title: 'Aurora',
    langs: ['en', 'fr'],
    defaultLangKey: 'en'
  },
  plugins: [

    'gatsby-plugin-react-helmet',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // 'gatsby-plugin-eslint', STILL INSTALLED
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/docs/`,
        name: `markdown-pages`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 740,
            },
          },
        ],
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

    
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/img/`
      }
    }
  ],

}
