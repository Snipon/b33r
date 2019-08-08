// Depedencies.
import React, { PureComponent } from 'react';
import Autosuggest from 'react-autosuggest';

// Utils.
import DataProvider from '../Util/DataProvider';

// Stylesheets.
import '../Styles/BeerSearch.css';
import theme from '../Styles/Autosuggest.module.css';

interface State {
  value: string;
  suggestions: [];
  selected: any;
}

interface Props {
  callback: () => void;
}

export default class BeerSearch extends PureComponent<Props> {
  private api = new DataProvider();

  public state: State = {
    value: '',
    suggestions: [],
    selected: null,
  };

  private getSuggestionValue = (suggestion: any) => suggestion.name;

  private renderSuggestion = (suggestion: any) => <div>{suggestion.name}</div>;

  private async getSuggestions(value: string) {
    const suggestions = await this.api.searchBeers(value);
    console.log(suggestions);
    this.setState({ suggestions });
  }

  private onSuggestionsFetchRequested = ({ value }: any) => {
    this.setState({
      suggestions: this.getSuggestions(value),
    });
  };

  private onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  private onSuggestionSelected(e: any, { suggestion }: any) {
    this.setState({ selected: suggestion });
  }

  onSubmitHandler() {
    this.api.addBeer(this.state.selected);
    this.props.callback();
  }

  render() {
    const { selected, suggestions, value } = this.state;
    const inputProps = {
      placeholder: 'Search for beer',
      value,
      onChange: (form: any, event: any) => {
        this.setState({
          value: event.newValue,
        });
      },
    };

    return (
      <div className="beer-search">
        <Autosuggest
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          onSuggestionSelected={this.onSuggestionSelected.bind(this)}
          suggestions={suggestions}
          getSuggestionValue={this.getSuggestionValue}
          renderSuggestion={this.renderSuggestion}
          inputProps={inputProps}
          theme={theme}
        />
        <button
          className="beer-search__button"
          onClick={this.onSubmitHandler.bind(this)}
          disabled={selected === null}
        >
          +
        </button>
      </div>
    );
  }
}
