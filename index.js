const bodyParser = require('body-parser');
const express = require('express');
const logger = require('morgan');

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
  return response.json(data);
});

app.post('/move', (request, response) => response.json());

app.post('/ping', (request, response) => response.sendStatus(200));
app.listen(app.get('port'), () => {
  console.log('Server listening on port %s', app.get('port'));
});
