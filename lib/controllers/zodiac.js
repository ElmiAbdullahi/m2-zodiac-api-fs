const { Router } = require('express');
const { signs } = require('../zodiac-data.js');

module.exports = Router()
  .get('/', (req, res) => {
    const filteredData = [];
    for (const sign of signs) {
      filteredData.push({ id: sign.id, name: sign.name });
    }
    res.json(filteredData);
  })

  .get('/:id', (req, res) => {
    let match;
    for (const sign of signs) {
      if (sign.id === req.params.id) match = sign;
    }
    return res.json(match);
  });
