const express = require('express'), app = express();

const env = nunjucks.configure(['web'], {
    autoescape: true,
    express: app
});

app.get('/', (req, res) => {
    res.render('index.njk');
});

app.post('/addserver', (req, res) => {
  
});

app.listen(3000);
