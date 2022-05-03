const path = require(`path`)
const {createFilePath} = require(`gatsby-source-filesystem`)

exports.createPages = ({graphql, actions}) => {
  return graphql(
    `
      {
        allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, limit: 1000) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                tags
                title
              }
            }
          }
        }
      }
    `,
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Get the templates
    const blogTemplate = path.resolve(`./src/templates/blog.tsx`)
    const tagTemplate = path.resolve('./src/templates/tag.tsx')

    // Create blog pages
    const blogs = result.data.allMarkdownRemark.edges
    blogs.forEach((blog, index) => {
      const previous = index === blogs.length - 1 ? null : blogs[index + 1].node
      const next = index === 0 ? null : blogs[index - 1].node

      actions.createPage({
        path: blog.node.fields.slug,
        component: blogTemplate,
        context: {
          slug: blog.node.fields.slug,
          previous,
          next,
        },
      })
    })

    // Iterate through each blog, putting all found tags into `tags`
    let tags = []
    blogs.forEach(post => {
      if (post.node.frontmatter.tags) {
        tags = tags.concat(post.node.frontmatter.tags)
      }
    })
    const uniqTags = [...new Set(tags)]

    // Create tag pages
    uniqTags.forEach(tag => {
      if (!tag) return
      actions.createPage({
        path: `/tags/${tag}/`,
        component: tagTemplate,
        context: {
          tag,
        },
      })
    })
  })
}

exports.onCreateNode = ({node, actions, getNode}) => {
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({node, getNode})
    actions.createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}