// Dependencies.
import React from 'react';

// Styles.
import '../Styles/Header.css';

interface Props {
  title: string;
}

const Header = (props: Props) => (
  <div className="header">
    <h1 className="title title--large">{props.title}</h1>
    <figure>
      <a
        href="https://github.com/Snipon/b33r"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          height="40"
          src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
          alt="GitHub mark logo"
        />
      </a>
    </figure>
  </div>
);

export default Header;
