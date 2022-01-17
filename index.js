const express = require('express');

const app = express();

const routes = require('./routes/index');

const envArgs = process.argv.splice(2);

const config = envArgs[0] ? require('./config/dev.json') : require('./config/prod.json');

console.log(config);
app.use('/', routes);

app.listen(config.port);
