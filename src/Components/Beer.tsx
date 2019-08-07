// Dependencies.
import React from 'react';

// Components.
import Text from './Styled/Text';
import { Spacings, Colors } from '../Util/variables';

interface Props {
  data: any;
}

const Styles = {
  wrapper: {
    display: 'flex',
    padding: Spacings.medium,
    backgroundColor: Colors.midtone,
    minHeight: '100vh',
    boxSizing: 'border-box' as 'border-box',
  },
};

const Beer = (props: Props) => (
  <div style={Styles.wrapper}>
    <figure>
      <img alt="A beer" src={props.data.image_url} style={{ width: '10vw' }} />
    </figure>
    <div style={{ marginLeft: Spacings.medium }}>
      <h1>
        <Text type="title" value={props.data.name} />
      </h1>
      <p>
        <Text type="byline" value={props.data.brewers_tips} />
      </p>
      <p>
        <Text type="paragraph" value={props.data.description} />
      </p>
    </div>
  </div>
);

export default Beer;
