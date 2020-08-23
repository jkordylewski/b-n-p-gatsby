import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Colophon" />
    Built with {` `} <a href="https://www.gatsbyjs.org">Gatsby</a>
    and Netlify {` `} <a href="https://www.netlify.com/">Netlify</a>
    give em both a try!
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
