import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './app/index.jsx';
import template from './template';

const server = express();
const port = process.env.PORT || 3001;

server.use('/assets', express.static('assets'));

server.get('/', (req, res) => {
  const appString = renderToString(<App />);

  res.send(template({
    body: appString,
    title: 'Hello World from the server',
  }));
});

server.listen(port);

console.log('Server listening on port ', port);
