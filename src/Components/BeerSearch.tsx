// Dependencies.
import React, { PureComponent } from 'react';

// Util.
import DataProvider from '../Util/DataProvider';
import BeerTeaser from './BeerTeaser';

interface State {
  beers: any[];
}

export default class BeerSearch extends PureComponent {
  private api = new DataProvider();
  public state: State = {
    beers: [],
  };

  async componentDidMount() {
    const beers = await this.api.getBeers();
    this.setState({ beers });
  }
  render() {
    const { beers } = this.state;
    return (
      <div className="App">
        {beers.length > 0 && (
          <ul>
            {beers.map(beer => (
              <li key={beer.id}>
                <BeerTeaser data={beer} />
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}
