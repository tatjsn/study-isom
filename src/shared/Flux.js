import { Flummox } from 'flummox';
import WordActions from './actions/WordActions';
import WordStore from './stores/WordStore';

export default class Flux extends Flummox {
  constructor() {
    super();

    const wordActions = this.createActions('words', WordActions);
    this.createStore('words', WordStore, { wordActions });
  }
}
