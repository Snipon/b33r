import React from 'react';

interface Props {
  src: String;
  width: string;
  alt: string;
  filter: string;
}

const Image = (props: Props) => {
  '<img src="//images.weserv.nl/?s=ory.weserv.nl/lichtenstein.jpg&w=300"></img>';

  const endpoint = '//images.weserv.nl';

  const params: any = {
    url: props.src,
    w: props.width,
    filt: props.filter,
  };

  const url =
    `${endpoint}?` +
    Object.keys(params)
      .map(key => `${key}=${params[key].toString()}`)
      .join('&');

  return <img src={url} alt={props.alt} />;
};

export default Image;
