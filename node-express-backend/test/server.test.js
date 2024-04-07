import request from 'supertest';
import { expect } from 'chai';

describe('GET /api/movies', function() {
  let app;
  
  before(async function() {
    app = (await import('../src/server.js')).default;
  });

  it('responds with status code 200', function(done) {
    request(app)
      .get('/api/movies')
      .end(function(err, res) {
        expect(res.statusCode).to.equal(200);
        done();
      });
  });
});
