const express = require('express'), app = express();

const env = nunjucks.configure(['web'], {
    autoescape: true,
    express: app
});

let data = [{
    name: 'Local',
    gamemode: 'FFA',
    address: '127.0.0.1',
    protocol: '18'
}]; // todo database

app.get('/', (req, res) => {
    res.render('index.njk', data);
});

app.post('/addserver', (req, res) => {
  
});

app.listen(3000);
