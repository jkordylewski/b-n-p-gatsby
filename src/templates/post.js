import React from 'react';
import moment from 'moment';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Image from 'gatsby-image';

export default ({ data, pageContext }) => {
  const { title, author, date, image } = data.markdownRemark.frontmatter;
  const { html } = data.markdownRemark;
  const { next, previous } = pageContext;
  console.log(data, pageContext);

  function prevButton() {
    if (!previous) {
      return;
    } else {
      var newdate = new Date(previous.frontmatter.date);
      const dateSegment = moment(newdate).format('YYYY/MM');
      const path = `/blog/${dateSegment}/${previous.frontmatter.slug}`;

      return (
        <Link className="button is-primary mr-4" to={path}>
          &laquo; previous: {previous.frontmatter.slug}
        </Link>
      );
    }
  }

  function nextButton() {
    if (!next) {
      return;
    } else {
      var nextdate = new Date(next.frontmatter.date);
      const nextdateSegment = moment(nextdate).format('YYYY/MM');
      const nextpath = `/blog/${nextdateSegment}/${next.frontmatter.slug}`;

      return (
        <Link className="button is-primary" to={nextpath}>
          next: {next.frontmatter.slug} &raquo;
        </Link>
      );
    }
  }

  return (
    <Layout>
      <Link to="/">&laquo; back to homepage</Link>
      <br />
      <br />
      <br />
      <h5 className="title is-5 has-text-right">{date}</h5>
      <h1 className="title is-2">{title}</h1>
      {/* <h4 style={{ color: 'rgb(165, 164, 164)' }}>
        {author} <span style={{ fontSize: '0.8em' }}></span>
      </h4> */}
      {image && <Image fluid={image.childImageSharp.fluid} alt={title} />}
      <div className="is-size-5" dangerouslySetInnerHTML={{ __html: html }} />

      <div className="mt-4 mb-5">
        {prevButton()}
        {nextButton()}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        author
        date
        image {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
