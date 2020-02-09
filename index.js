const bodyParser = require('body-parser');
const express = require('express');
const logger = require('morgan');
const app = express();
const port = 3000;

app.set('port', (process.env.PORT || 3001))
app.enable('verbose erros');

app.use(logger('dev'));

app.use(bodyParser.json());

app.post('/start', (request, response) => {
    console.log('hitting the start post request');
    console.log(request.body);
    const data = {
        color: '#E66465',
        headType: 'bwc-bonhomme',
        tailType: 'bwc-flake'
    };

     response.json(data);
});

    // Handle POST request to '/move'
app.post('/move', (request, response) => {
    // NOTE: Do something here to generate your move
  
    // Response data
    const data = {
      move: 'up', // one of: ['up','down','left','right']
    }
  
    return response.json(data)
  })
  
  app.post('/end', (request, response) => {
    // NOTE: Any cleanup when a game is complete.
    return response.json({})
  })
  
  app.post('/ping', (request, response) => {
    // Used for checking if this snake is still alive.
    return response.json({});
  })

  
app.use('*', fallbackHandler)
app.use(notFoundHandler)
app.use(genericErrorHandler)

app.listen(app.get('port'), () => {
    console.log('Server listening on port %s', app.get('port'));
});