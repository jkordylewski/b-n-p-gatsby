import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import ProjectPreview from '../components/project-preview';

import '../components/bulma.scss';

import Layout from '../components/layout';
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
    }
  `);
  const projects = data.allProjectsJson.edges || {};

  return (
    <Layout>
      <SEO title="Projects" />
      <h2 className="title is-2 has-text-weight-bold is-family-monospace">
        Projects + Experiments
      </h2>
      <h3 className="title is-3 is-family-monospace">
        Showcasing my own creative coding projects and experiments
      </h3>
      <div className="columns">
        <div className="column is-four-fifths">
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
          <Link to="/">&laquo; back to homepage</Link>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
