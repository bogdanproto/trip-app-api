import express from 'express';
import logger from 'morgan';
import cors from 'cors';
import 'dotenv/config';
import { authPath, cityPath, status, tripPath } from './const/index.js';
import { handleMongooseErr } from './helpers/index.js';
import authRouter from './routes/auth.js';
import cityRouter from './routes/city.js';
import tripRouter from './routes/trip.js';

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use(authPath.ROOT, authRouter);
app.use(cityPath.ROOT, cityRouter);
app.use(tripPath.ROOT, tripRouter);

app.use((req, res) => {
  res.status(status.NOT_FOUND.status).json(status.NOT_FOUND);
});

app.use((err, req, res, next) => {
  const error = handleMongooseErr(err);

  const {
    status = 500,
    message = 'Internal Server Error',
    code = '000',
  } = error;
  res.status(status).json({ status, message, code });
});

export default app;
