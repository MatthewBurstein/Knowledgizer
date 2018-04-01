const request = require('supertest');
const app = require('../app');

describe('infrastructure setup', () => {
  it('responds to the GET method', (done => {
    request(app).get('/').then((res) => {
      expect(res.statusCode).toBe(200);
      done();
    })
  }))
});
