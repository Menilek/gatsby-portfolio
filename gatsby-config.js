module.exports = {
  siteMetadata: {
    title: `MikaelTechane`,
    description: `A Multidisciplinary Creative`,
    author: `@gatsbyjs`,
    menuLinks:[
      {
        name:'narrative',
        link:'/narrative'
      },
      {
        name:'commercial',
        link:'/commercial'
      },
      {
        name:'documentary',
        link:'/documentary'
      },
      {
        name:'photography',
        link:'/photography'
      },
      {
        name:'about',
        link:'/about'
      }
    ],
    socialLinks:[
      {
        name:'instagram',
        link:'https://www.instagram.com/mikaels_album/'
      },
      {
        name:'vimeo',
        link:'https://www.instagram.com/mikaels_album/'
      }
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
        options: {
          stripMetadata: true,
        },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
