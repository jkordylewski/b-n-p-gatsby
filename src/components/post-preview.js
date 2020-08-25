import React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';

const PostPreview = ({ title, date, teaser, slug, imageData }) => (
  <div className="post-preview">
    <Link to={`/${slug}/`}>
      <Image fluid={imageData} alt={title} />
    </Link>
    <span>{date}</span>
    <h2 className="title is-2">
      <Link to={`/${slug}/`}>{title}</Link>
    </h2>
    <p>{teaser}</p>
  </div>
);

export default PostPreview;
