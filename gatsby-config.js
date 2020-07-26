const path = require('path')

module.exports = {
  siteMetadata: {
    title: `Wal Wal`,
    description: `Wal is a fullstack developer who loves collaborating with others to create solutions that solve real-world and everyday problems.`,
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/assets`
      }
    },
    {
      resolve: 'gatsby-plugin-copy-files-enhanced',
      options: {
        source: `${__dirname}/assets`,
        destination: '/assets',
        purge: true
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `React`, // defaults to "React"
        allExtensions: true // defaults to false
      }
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        components: path.join(__dirname, 'src/components'),
        hooks: path.join(__dirname, 'src/hooks'),
        images: path.join(__dirname, 'src/images')
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        // extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 680
            }
          },
          {
            resolve: `gatsby-remark-prismjs`
          }
        ]
      }
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-client-side-redirect` // must be last in the list
  ]
}
