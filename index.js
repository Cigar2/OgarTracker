const express = require('express'), app = express();

const env = nunjucks.configure(['web'], {
    autoescape: true,
    express: app
});

let data = [{
    name: 'Local',
    gamemode: 'FFA',
    address: '127.0.0.1',
    onlineSince: Date.now(),
    operatingSystem: 'Linux',
    protocol: '18'
}]; // todo database

const startUpDate = Date.now();

app.get('/', (req, res) => {
    res.render('index.njk', {
        servers: data,
        lastRestart: startUpDate
    });
});

app.post('/addserver', (req, res) => {
  data.push(req.query); // todo verification etc.
});

app.listen(3000);
