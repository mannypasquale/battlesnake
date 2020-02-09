const bodyParser = require('body-parser');
const express = require('express');
const logger = require('morgan');
const app = express();

app.set('port', (process.env.PORT || 9001))
app.enable('verbose erros');

app.use(logger('dev'));

app.use(bodyParser.json());

app.post('/start', (request, response) => {
    // Here is the data for our snake etc
    const data = {
        color: '#E66465',
        headType: 'bwc-bonhomme',
        tailType: 'bwc-flake'
    };
    app.set('my_location', {x:response.body.you.body.x, y: response.body.you.body.y});
    app.set('my_health', response.body.you.health);
    app.set('board_size',
        {
            height: response.body.board.height,
            width: response.body.board.width
        });
    app.set('food_location',
        {
            x: response.body.board.food[0].x,
            y:response.body.board.food[0].y
        });
    return response.json(data);
});

app.post('/move', (request, response) => {
    console.log('my snakes current postion');
    console.log(app.get('my_location'));
    console.log(app.get('my_health'));
    console.log(request.body);
    return response.json({move: "right"});
});

app.post('/ping', (request, response) => {
    return response.sendStatus(200);
});
app.listen(app.get('port'), () => {
    console.log('Server listening on port %s', app.get('port'));
});