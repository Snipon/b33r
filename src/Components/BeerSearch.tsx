// Dependencies.
import React, { PureComponent } from 'react';

// Util.
import DataProvider from '../Util/DataProvider';

// Components.
import Beer from './Beer';
import BeerTeaser from './BeerTeaser';
import Header from './Header';

// StyleSheets.
import '../Styles/Globals.css';
import '../Styles/Typo.css';
import '../Styles/Layout.css';
import '../Styles/BeerSearch.css';

interface State {
  active: any;
  beers: any[];
}

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
      <main className="search">
        <Header title="B33R" />
        {beers.length > 0 && (
          <nav>
            <ul className="beer-list">
              {beers.map(beer => (
                <li
                  className={`beer-list__item ${
                    active && active.id === beer.id ? 'active' : ''
                  }`}
                  key={beer.id}
                  onClick={() => this.onClickHandler(beer)}
                >
                  <BeerTeaser data={beer} />
                </li>
              ))}
            </ul>
          </nav>
        )}
        {active && (
          <div>
            <Beer data={active} />
          </div>
        )}
      </main>
    );
  }
}
