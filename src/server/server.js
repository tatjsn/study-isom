import express from 'express';
import React from 'react';
import Greet from '../shared/components/Greet';
import Flux from '../shared/Flux';
import FluxComponent from 'flummox/component';

const server = express();

server.use((req, res, next) => {
  if (req.url == '/favicon.ico') {
    res.status(404);
    res.end();
    return;
  }

  const flux = new Flux();
  flux.getStore('words').replaceState({
    word: 'Sawasdee'
  });

  res.type('html');
  res.write(React.renderToString(
    <FluxComponent flux={flux}>
      <Greet />
    </FluxComponent>
  ));
  res.end();
});

server.listen(8080);

export default server;
