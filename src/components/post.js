import React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';

const Project = ({ title, description, url, imageData }) => (
  <div className="project">
    <Link to="/projects">&laquo; back to all projects</Link>
    <h1 className="title is-2">{title}</h1>
    <Image fluid={imageData} alt={title} />
    <p>{description}</p>
    <p>
      <a href={url}>View this project online &raquo;</a>
    </p>
  </div>
);

export default Project;
