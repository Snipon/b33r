// Dependencies.
import React from 'react';

// Util.
import { Spacings } from '../Util/variables';

// Components.
import Text from './Styled/Text';

interface Props {
  data: any;
}

const BeerTeaser = (props: Props) => (
  <article style={Styles.wrapper}>
    <figure style={Styles.imageWrapper}>
      <img src={props.data.image_url} alt={props.data.name} height="100" />
    </figure>
    <div style={Styles.contentWrapper}>
      <h1>
        <Text type="heading" value={props.data.name} />
      </h1>
      <p>
        <Text type="byline" value={props.data.tagline} />
      </p>
    </div>
  </article>
);

const Styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'row' as 'row',
    padding: Spacings.small,
  },
  contentWrapper: {
    paddingLeft: Spacings.small,
  },
  imageWrapper: {
    width: 50,
    textAlign: 'center' as 'center',
  },
};

export default BeerTeaser;
