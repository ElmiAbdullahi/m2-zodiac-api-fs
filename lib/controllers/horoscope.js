const { Router } = require('express');
const { hSigns } = require('../horoscope-data.js');

module.exports = Router().get('/:sign', (req, res) => {
  let match;
  for (const hSign of hSigns) {
    if (hSign.sign === req.params.sign) match = hSign;
  }
  return res.json(match.horoscope);
});
