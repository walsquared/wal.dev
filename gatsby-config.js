const path = require('path')

module.exports = {
  siteMetadata: {
    title: `Wal Wal`,
    description: `A fullstack developer who loves collaborating with others to create solutions that solve real-world and everyday problems.`,
    author: `@walsquared`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        components: path.join(__dirname, 'src/components'),
        layouts: path.join(__dirname, 'src/layouts'),
        hooks: path.join(__dirname, 'src/hooks'),
        images: path.join(__dirname, 'src/images')
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`
  ]
}
