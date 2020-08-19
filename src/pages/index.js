import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import ProjectPreview from "../components/project-preview"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

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
  `)
  const projects = data.allProjectsJson.edges
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Bits + Pixels</h1>
      {projects.map(({ node: project }) => {
        const title = project.title
        const teaser = project.teaser
        const slug = project.slug
        const imageData = project.image.childImageSharp.fluid

        return (
          <ProjectPreview
            title={title}
            teaser={teaser}
            slug={slug}
            imageData={imageData}
          />
        )
      })}
      <p>
        <em>More COMING SOON.</em>
      </p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link> <br />
      {/* <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
    </Layout>
  )
}

export default IndexPage
