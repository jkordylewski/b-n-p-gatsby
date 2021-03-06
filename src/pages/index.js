import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import ProjectPreview from '../components/project-preview';
import PostPreview from '../components/post-preview';
//import { format } from 'date-fns';
import moment from 'moment';

import '../components/bulma.scss';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      allProjectsJson {
        edges {
          node {
            title
            slug
            teaser
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 5
      ) {
        edges {
          node {
            frontmatter {
              id
              date
              slug
              title
            }
          }
        }
      }
      allLinksJson {
        edges {
          node {
            title
            url
          }
        }
      }
      allToolsJson {
        edges {
          node {
            title
            url
          }
        }
      }
    }
  `);
  const projects = data.allProjectsJson.edges || {};
  const posts = data.allMarkdownRemark.edges || {};
  const links = data.allLinksJson.edges || {};
  const tools = data.allToolsJson.edges || {};
  return (
    <Layout>
      <SEO title="Home" />
      <h1 className="title is-1 has-text-weight-bold is-family-monospace">
        Bits + Pixels
      </h1>
      <div className="columns">
        <div className="column is-two-fifths">
          <h2 className="title is-2">Experiments</h2>
          {projects.map(({ node: project }) => {
            const title = project.title;
            const teaser = project.teaser;
            const slug = project.slug;
            const imageData = project.image.childImageSharp.fluid;

            return (
              <ProjectPreview
                title={title}
                teaser={teaser}
                slug={slug}
                imageData={imageData}
              />
            );
          })}
          <Link className="button is-primary" to="/projects/">
            See all projects
          </Link>{' '}
          <br />
        </div>
        <div className="column is-two-fifths">
          <div className="hp-blog">
            <h3 className="title is-4">Blog</h3>
            {posts.map(({ node: project }) => {
              const title = project.frontmatter.title;
              const slug = project.frontmatter.slug;
              const date = project.frontmatter.date;

              var newdate = new Date(date);
              const dateSegment = moment(newdate).format('YYYY/MM');
              const path = `blog/${dateSegment}/${slug}`;

              return <PostPreview title={title} slug={path} date={date} />;
            })}
            <Link className="button" to="/blog/">
              See all posts
            </Link>{' '}
            <br />
          </div>
          <br />
        </div>
        <div className="column is-one-fifth">
          <div className="hp-links">
            <h3 className="title is-4">Artists</h3>
            <ul>
              {links.map(({ node: link }) => {
                const title = link.title;
                const url = link.url;

                return (
                  <li>
                    <Link to={url}>{title}</Link>
                  </li>
                );
              })}
            </ul>

            <br />
          </div>
          <div className="hp-tools">
            <h3 className="title is-4">Tools</h3>
            <ul>
              {tools.map(({ node: link }) => {
                const title = link.title;
                const url = link.url;

                return (
                  <li>
                    <Link to={url}>{title}</Link>
                  </li>
                );
              })}
            </ul>

            <br />
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column is-three-fifths">
          <Link to="/page-2/">Go to page 2</Link> <br />
          <Link to="/colophon/">Colophon</Link> <br />
          {/* <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
