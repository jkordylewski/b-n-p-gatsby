/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';
import './layout.css';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="container">
        <main
          style={{
            padding: `0 1.0875rem 1.45rem`,
          }}
        >
          {children}
        </main>
      </div>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <footer
          style={{
            textAlign: `center`,
          }}
        >
          <br />
          &nbsp; &mdash; &sect; &mdash; &nbsp;
          <br />
          bits-n-pixels.com © {new Date().getFullYear()}
          <br /> a <a href="https://www.jkordylewski.com">
            jkordylewski.com
          </a>{' '}
          site
          <br />
        </footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
