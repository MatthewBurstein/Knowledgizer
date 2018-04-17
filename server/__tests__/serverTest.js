const request = require('supertest');
const app = require('../server');

describe('infrastructure setup', () => {
  it('responds to the GET method', (done) => {
    request(app).get('/api').then((res) => {
      console.log(res)
      expect(res.statusCode).toBe(200);
      done();
    })
  });
});
