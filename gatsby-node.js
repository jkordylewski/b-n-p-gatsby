/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// const { format } = require("date-fns")
//import moment from 'moment';
//import * as moment from "moment";
//window.moment = moment;
const moment = require('moment');

async function createProjectsPages(graphql, actions, reporter) {
  const result = await graphql(`
    {
      allProjectsJson {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  if (result.error) {
    reporter.panic('There was a problem loading your projects!');
    return;
  }

  const projects = result.data.allProjectsJson.edges;
  //const posts = result.data.allMarkdownRemark.edges

  projects.forEach(({ node: project }) => {
    const slug = project.slug;

    actions.createPage({
      path: `/${slug}/`,
      component: require.resolve('./src/templates/project.js'),
      context: { slug },
    });
  });

  // posts.forEach(({ node: post }) => {
  //   const slug = post.slug

  //   actions.createPage({
  //     path: `/${slug}/`,
  //     component: require.resolve("./src/templates/post.js"),
  //     context: { slug },
  //   })
  // })
}

async function createBlogPostPages(graphql, actions) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              id
              date
              slug
            }
          }
          next {
            frontmatter {
              slug
              date
            }
          }
          previous {
            frontmatter {
              slug
              date
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const postEdges = (result.data.allMarkdownRemark || {}).edges || [];

  postEdges
    //.filter(edge => !isFuture(edge.node.date))
    .forEach((edge, index) => {
      const { id, slug, date } = edge.node.frontmatter;
      const next = edge.next;
      const previous = edge.previous;
      var newdate = new Date(date);
      const dateSegment = moment(newdate).format('YYYY/MM');
      const path = `/blog/${dateSegment}/${slug}/`;

      createPage({
        path,
        component: require.resolve('./src/templates/post.js'),
        context: { slug, next, previous },
      });
    });
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  await createBlogPostPages(graphql, actions, reporter);
  await createProjectsPages(graphql, actions, reporter);
};
