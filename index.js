const express = require('express'), app = express();

app.use(express.static('web'));

app.post('/addserver', (req, res) => {
  
});

app.listen(3000);
