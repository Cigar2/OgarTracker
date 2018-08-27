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

const startupDate = Date.now();

app.get('/', (req, res) => {
    res.render('index.njk', {
        servers: data,
        lastRestart: startupDate
    });
});

app.use(express.json());

app.post('/updateserver', (req, res) => {
    const name = req.body.name, gamemode = req.body.gamemode, address = req.body.address, onlineSince = req.body,
          operatingSystem = req.body.operatingSystem, protocol = req.body.protocol;
    if(typeof name !== 'string' || typeof gamemode !== 'string' || typeof address !== 'string' ||
       typeof onlineSince !== 'number' || typeof operatingSystem !== 'string' || typeof protocol !== 'string')
        return res.json({success: false, error: 'Incomplete/invalid request.'});
    const obj = {
        name, gamemode, address, onlineSince, operatingSystem, protocol
    };
});

app.listen(3000);
