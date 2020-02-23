/* eslint-disable comma-dangle */
/* eslint-disable object-shorthand */
const bodyParser = require('body-parser');
const express = require('express');
const logger = require('morgan');

const buildBoard = require('./buildBoard');
const makeMove = require('./makeMove');

const app = express();

app.set('port', (process.env.PORT || 9001));
app.enable('verbose erros');

app.use(logger('dev'));

app.use(bodyParser.json());

app.post('/start', (request, response) => {
  // Here is the data for our snake etc
  const data = {
    color: '#E66465',
    headType: 'bwc-bonhomme',
    tailType: 'bwc-flake',
  };
  // console.log(buildBoard(request.body.board));

  return response.json(data);
});

app.post('/move', (request, response) => {
  console.log(request.body.you);
  // console.log(response);
  const board = buildBoard(request);
  const move = makeMove(board, request.body.you.body[0]);

  return response.json({ move: move });
  // First coords is the head, body (+- 1), tail
  // [ { x: 4, y: 2 }, { x: 4, y: 2 }, { x: 4, y: 2 } ]
  // if (request.body.you)
});

app.post('/ping', (request, response) => response.sendStatus(200));
app.listen(app.get('port'), () => {
  console.log('Server listening on port %s', app.get('port'));
});
