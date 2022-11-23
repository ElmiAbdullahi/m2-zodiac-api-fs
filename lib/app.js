const express = require('express');
const path = require('path');
const app = express();

app.use('/zodiac', require('./controllers/zodiac'));
app.use('/horoscope', require('./controllers/horoscope.js'));

app.use(express.static(path.join(__dirname, 'public')));
module.exports = app;
