import firebaseConfig from '../firebaseConfig.json';
import * as firebase from 'firebase/app';
import 'firebase/firestore';

export default class DataProvider {
  private firebase = firebase.initializeApp(firebaseConfig);
  private storage = firebase.firestore();
  private data = this.storage.collection('beer');
  private APIEndpoint = 'https://api.punkapi.com/v2';

  // Get beers from collection.
  public async getBeers() {
    try {
      const beersReference = await this.data.get();
      const beerIDs: number[] = [];
      beersReference.forEach(beerRef => {
        const beerId = beerRef.data().api_id;
        beerIDs.push(beerId);
      });
      const result = await this.fetchBeers(beerIDs.join('|'));
      return result;
    } catch (error) {
      throw error;
    }
  }

  // Get beers from public Database API
  private async fetchBeers(ids: string) {
    const beers = await fetch(`${this.APIEndpoint}/beers?ids=${ids}`);
    const json = await beers.json();
    return json;
  }
}
