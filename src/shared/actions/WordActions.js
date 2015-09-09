import { Actions } from 'flummox';

export default class WordActions extends Actions {
  setWord(word) {
    return {
      word: word
    }
  }
}
