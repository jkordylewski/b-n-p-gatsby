import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const SecondPage = () => (
  <Layout>
    <SEO title="Colophon" />
    <div className="columns">
      <div className="column is-three-fifths">
        Built with {` `} <a href="https://www.gatsbyjs.org">Gatsby</a>
        and {` `} <a href="https://www.netlify.com/">Netlify</a> {` `}
        give em both a try!
        <br />
        <div
          style={{
            maxWidth: `300px`,
            margin: `1.45rem 0`,
          }}
        >
          <Image />
        </div>
        <Link to="/">Go back to the homepage</Link>
      </div>
    </div>
  </Layout>
);

export default SecondPage;
