// Dependencies.
import React from 'react';

// Utils.
import { Colors, FontSizes, Spacings } from '../../Util/variables';

const Styles = {
  default: {
    color: Colors.dark,
    display: 'block',
    fontSize: FontSizes.default,
  },
  title: {
    color: Colors.primary,
    fontWeight: 800,
    fontSize: FontSizes.large,
    marginBottom: Spacings.small,
  },
  heading: {
    fontSize: FontSizes.medium,
    marginBottom: Spacings.small,
    color: Colors.shade,
  },
  byline: {
    color: Colors.secondary,
    marginBottom: Spacings.small,
  },
  paragraph: {
    color: Colors.dark,
    fontSize: FontSizes.default,
    lineHeight: 1.5,
  },
};

interface Props {
  type: keyof typeof Styles;
  value: string;
}

const Text = (props: Props) => (
  <span style={{ ...Styles.default, ...(Styles[props.type] || null) }}>
    {props.value}
  </span>
);

export default Text;
