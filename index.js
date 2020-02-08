const express = require('express');
const app = express();
const port = 3000;

app.post('/', (req, res) => {
    console.log(req);
    res.send('Hello World!')}
    );
app.post('/hisam', (req, res) => res.send('whaddddup'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));