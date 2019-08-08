export default class DataProvider {
  private storage = window.localStorage;
  private APIEndpoint = 'https://api.punkapi.com/v2';

  // Get beers from collection.
  public getBeers(): any {
    try {
      const beers = this.storage.getItem('beers') || '[]';
      return JSON.parse(beers);
    } catch (error) {
      throw error;
    }
  }

  public addBeer(beer: any) {
    try {
      const beers = this.getBeers();
      const exists = beers.find((item: any, i: number) => {
        if (item.id === beer.id) {
          return true;
        } else {
          return false;
        }
      });

      if (!exists) {
        beers.push(beer);
        this.storage.setItem('beers', JSON.stringify(beers));
      }
    } catch (error) {
      throw error;
    }
  }

  // Get beers from public Database API
  public async searchBeers(query: string) {
    try {
      const beers = await fetch(`${this.APIEndpoint}/beers?beer_name=${query}`);
      const json = await beers.json();
      return json;
    } catch (error) {
      throw error;
    }
  }
}
