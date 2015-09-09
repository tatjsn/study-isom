import { Store } from 'flummox';

export default class WordStore extends Store {
  constructor({ wordActions }) {
    super();

    this.register(wordActions.setWord, this.handleSetWord);

    this.state = {
      word: ''
    };
  }

  handleSetWord(words) {
    this.setState(words);
  }

  getWord() {
    return this.state.word;
  }

  static serialize(state) {
    return JSON.stringify(state);
  }

  static deserialize(state) {
    return JSON.parse(state);
  }
}
