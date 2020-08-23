import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import ProjectPreview from '../components/project-preview';
//import { format } from 'date-fns';
import moment from 'moment';

import '../components/bulma.scss';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    {
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

  const posts = data.allMarkdownRemark.edges || {};
  return (
    <Layout>
      <SEO title="Blog" />
      <h2 className="title is-2 has-text-weight-bold">Bits + Pixels Blog</h2>
      <div className="columns">
        <div className="column is-three-fifths">
          {posts.map(({ node: project }) => {
            const title = project.frontmatter.title;
            const slug = project.frontmatter.slug;
            const date = project.frontmatter.date;

            var newdate = new Date(date);
            const dateSegment = moment(newdate).format('YYYY/MM');
            const path = `blog/${dateSegment}/${slug}`;

            return <ProjectPreview title={title} slug={path} />;
          })}
          <Link to="/">View homepage</Link>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;
