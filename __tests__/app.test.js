const request = require('supertest');
const app = require('../lib/app');

const { signs } = require('../lib/zodiac-data.js');

describe('zodiac routes', () => {
  it('/zodiac should return list of sign', async () => {
    const res = await request(app).get('/zodiac');
    const expected = signs.map((sign) => {
      return { id: sign.id, name: sign.name };
    });
    expect(res.body).toEqual(expected);
  });
  it('/zodiac/:id should return zodiac detail', async () => {
    const res = await request(app).get('/zodiac/1');
    const aquarius = {
      id: '1',
      name: 'aquarius',
      dates: 'Jan 21 - Feb 19',
      symbol: 'Water Bearer',
    };
    expect(res.body).toEqual(aquarius);
  });
});
describe('hSigns routes', () => {
  it('/horoscope/:id should return horoscope by sign', async () => {
    const res = await request(app).get('/horoscope/gemini');
    const gemini = {
      id: '5',
      sign: 'gemini',
      horoscope: 'Gingerbeer',
    };
    expect(res.body).toEqual(gemini.horoscope);
  });
});
