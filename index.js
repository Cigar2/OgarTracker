const express = require('express'), app = express();

const env = nunjucks.configure(['web'], {
    autoescape: true,
    express: app
});

app.use(express.static('web'));

app.post('/addserver', (req, res) => {
  
});

app.listen(3000);
