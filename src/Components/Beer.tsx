// Dependencies.
import React from 'react';

// Stylesheets.
import '../Styles/Beer.css';

interface Props {
  data: any;
}

const Beer = (props: Props) => (
  <article className="beer">
    <figure className="beer__image">
      <img alt="A beer" src={props.data.image_url} />
    </figure>
    <div className="beer__content">
      <h1 className="title title--large">{props.data.name}</h1>
      <p className="byline">{props.data.brewers_tips}</p>
      <p className="paragraph">{props.data.description}</p>
    </div>
  </article>
);

export default Beer;
