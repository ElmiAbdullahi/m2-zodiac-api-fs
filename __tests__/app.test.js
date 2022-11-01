const request = require('supertest');
const app = require('../lib/app');

const { signs } = require('../lib/signs-data');

describe('zodiac routes', () => {
  it('/signs should return list of sign', async () => {
    const res = await request(app).get('/signs');
    const expected = sign.map((sign) => {
      return { id: sign.id, name: sign.name };
    });
    expect(res.body).toEqual('Yooo World');
  });
});
