import express from 'express';
import { json } from 'body-parser';
import routes from './routes';

const { signUpRouter } = routes;

const app = express();

// Express - Body parser will be defined here.

app.use(json()); // with this, we will be able to access the content of the body that comes with the request.

// app.get('*', (req, res) => {
//   res.status(200).send({});
// });

app.use(signUpRouter);

export default app;
