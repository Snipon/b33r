// Dependencies.
import React from 'react';

// Components.
import Image from './Image';

// StyleSheets.
import '../Styles/BeerTeaser.css';

interface Props {
  data: any;
}

const BeerTeaser = (props: Props) => (
  <article className="teaser">
    <figure className="teaser__image">
      <Image
        filter="greyscale"
        width="50"
        src={props.data.image_url}
        alt={props.data.name}
      />
    </figure>
    <div className="teaser__content">
      <h1 className="title">{props.data.name}</h1>
      <p className="byline">{props.data.tagline}</p>
    </div>
  </article>
);

export default BeerTeaser;
