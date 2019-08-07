import React from 'react';

interface Props {
  data: any;
}

const BeerTeaser = (props: Props) => (
  <article>
    <img src={props.data.image_url} alt={props.data.name} height="100" />
    <h1>{props.data.name}</h1>
    <span>{props.data.tagline}</span>
  </article>
);

export default BeerTeaser;
