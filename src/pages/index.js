import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import ProjectPreview from '../components/project-preview';
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
      allMarkdownRemark {
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
    }
  `);
  const projects = data.allProjectsJson.edges || {};
  const posts = data.allMarkdownRemark.edges || {};
  return (
    <Layout>
      <SEO title="Home" />
      <h1 className="title is-1 has-text-weight-bold is-family-monospace">
        Bits + Pixels
      </h1>
      <div className="columns">
        <div className="column is-three-fifths">
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
          <p>
            <p className="content">
              <em>More COMING SOON.</em>
            </p>
          </p>
          <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            <Image />
          </div>
          <Link to="/page-2/">Go to page 2</Link> <br />
          <Link to="/colophon/">Colophon</Link> <br />
          {/* <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
        </div>
        <div className="column">
          <h3 className="title is-4">Blog</h3>
          {posts.map(({ node: project }) => {
            const title = project.frontmatter.title;
            const slug = project.frontmatter.slug;
            const date = project.frontmatter.date;

            var newdate = new Date(date);
            const dateSegment = moment(newdate).format('YYYY/MM');
            const path = `blog/${dateSegment}/${slug}`;

            return <ProjectPreview title={title} slug={path} />;
          })}
          <Link to="/blog/">All posts</Link> <br />
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
