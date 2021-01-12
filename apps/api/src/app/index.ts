import * as express from 'express';
import * as mongoose from 'mongoose';
import cors from 'cors';
import config from './config/';
import logger from  'morgan';
// add rate limit and helmet

import jobRoutes from './routes/job'
import usersRoutes from './routes/users'
import authRoutes from './routes/auth'


const app = express();

const db = config.MONGO_URI;

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log('MongoDB Error:' + err));


app.use(logger('dev'));
app.use(express.json());
app.use(cors());

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to job portal api!' });
});
app.use('/api/jobs', jobRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/auth', authRoutes);

export default app;
