import request from 'supertest';
import app from '../src/index';

describe('GET /', () => {
  it('should return 200 OK', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual('¡Hola Mundo! Desde Express con TypeScript');
  });
});
