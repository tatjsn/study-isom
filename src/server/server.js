import express from 'express';
import React from 'react';
import Greet from '../shared/components/Greet'

const server = express();

server.use((req, res, next) => {
  res.type('html');
  res.write(React.renderToString(
    <Greet />
  ));
  res.end();
});

server.listen(8080);

export default server;
