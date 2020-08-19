import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"

const ProjectPreview = ({ title, teaser, slug, imageData }) => (
  <div className="project-preview">
    <Link to={`/${slug}/`}>
      <Image fluid={imageData} alt={title} />
    </Link>
    <h2>
      <Link to={`/${slug}/`}>{title}</Link>
    </h2>
    <p>{teaser}</p>
    <p>
      <Link to={`/${slug}/`}>View this project &rarr;</Link>
    </p>
  </div>
)

export default ProjectPreview
