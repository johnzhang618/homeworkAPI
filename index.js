const express = require('express');

const app = express();

const config = require('./config/dev.json');
const routes = require('./routes/index');

app.use('/', routes);

app.listen(config.port);
