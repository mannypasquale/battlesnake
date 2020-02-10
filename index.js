const bodyParser = require('body-parser');
const express = require('express');
const logger = require('morgan');
const app = express();

app.set('port', (process.env.PORT || 9001))
app.enable('verbose erros');

app.use(logger('dev'));
const arr = ['right', 'up', 'left', 'down'];
app.use(bodyParser.json());
let board;
let my_health;
let my_location;
app.post('/start', (request, response) => {
    console.log(request.body.you);
    console.log(request.body.board);
    // Here is the data for our snake etc
    const data = {
        color: '#E66465',
        headType: 'bwc-bonhomme',
        tailType: 'bwc-flake'
    };
    board = {
        height: request.body.board.height,
        width: request.body.board.width
    };
    my_location = {
        x: request.body.you.body[0].x,
        y: request.body.you.body[0].y
    };
    return response.json(data);
});

app.post('/move', (request, response) => {
    console.log('logging');
    console.log(board);
    console.log(my_location);
    return response.json({move:arr[Math.floor(Math.random() * 4)]});
});

app.post('/ping', (request, response) => {
    return response.sendStatus(200);
});
app.listen(app.get('port'), () => {
    console.log('Server listening on port %s', app.get('port'));
});