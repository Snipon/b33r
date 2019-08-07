// Dependencies.
import React, { PureComponent } from 'react';

// Util.
import DataProvider from '../Util/DataProvider';

// Components.
import Beer from './Beer';
import BeerTeaser from './BeerTeaser';
import { Colors, Spacings } from '../Util/variables';

interface State {
  active: any;
  beers: any[];
}

const Styles = {
  pageWrapper: {
    backgroundColor: Colors.highlight,
    height: '100vh',
    display: 'flex',
  },
  listWrapper: {
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column' as 'column',
    listStyle: 'none',
    padding: 0,
  },
  listItem: {
    backgroundColor: 'transparent',
  },
  active: {
    backgroundColor: Colors.midtone,
  },
};

export default class BeerSearch extends PureComponent {
  private api = new DataProvider();
  public state: State = {
    active: null,
    beers: [],
  };

  async componentDidMount() {
    const beers = await this.api.getBeers();
    this.setState({ beers });
  }

  public onClickHandler(data: any): void {
    this.setState({ active: data });
  }

  render() {
    const { active, beers } = this.state;
    return (
      <div style={Styles.pageWrapper}>
        <div style={{ flex: 1 }}>
          {beers.length > 0 && (
            <ul style={Styles.listWrapper}>
              {beers.map(beer => (
                <li
                  key={beer.id}
                  style={{
                    ...Styles.listItem,
                    ...(active && active.id === beer.id && Styles.active),
                  }}
                  onClick={() => this.onClickHandler(beer)}
                >
                  <BeerTeaser data={beer} />
                </li>
              ))}
            </ul>
          )}
        </div>
        <div style={{ flex: 2 }}>{active && <Beer data={active} />}</div>
        <a
          href="https://github.com/Snipon/b33r"
          target="_blank"
          style={{
            position: 'absolute',
            bottom: Spacings.medium,
            right: Spacings.medium,
          }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
            width={50}
          />
        </a>
      </div>
    );
  }
}
