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
         color: '#DFFF00'
     };

     response.json(data);
});

app.listen(app.get('port'), () => {
    console.log('Server listening on port %s', app.get('port'));
});