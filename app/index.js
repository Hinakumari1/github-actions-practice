const express = require('express');
const app = express();
app.get('/', (_, res) => res.send('Hello from GitHub Actions'));

module.exports = app;
