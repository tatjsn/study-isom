import React from 'react';
import connectToStores from 'flummox/connect';

class Greet extends React.Component {
  render () {
    const { word } = this.props;

    return (
      <i>{word}</i>
    );
  }
}

Greet = connectToStores(Greet, {
  words: store => ({
    word: store.getWord()
  })
});

export default Greet;
