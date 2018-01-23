const express = require('express');

const appConfig = require('../config/app');
const logger = require('./logger');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello world!\n');
});

app.listen(appConfig.port, appConfig.host, () => {
  logger.info(`Server is running on: ${appConfig.serverUrl}`);
});
