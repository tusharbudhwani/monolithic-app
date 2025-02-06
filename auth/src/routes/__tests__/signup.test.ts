import request from 'supertest';
import app from '../../app';

// jest is great for beforeAll, Beforeeach, afterAll tests

// it('should return an error 405 for non-post requests at the signup route', ()=> {

// })

it('should return an error 422 if the email is not valid', async () => {
  await request(app).post('/api/auth/signup').send({}).expect(422);

  await request(app).post('/api/auth/signup').send({ email: 'invalidEmail' }).expect(422);
});
