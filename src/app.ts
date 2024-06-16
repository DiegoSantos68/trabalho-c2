import express from 'express';
import bodyParser from 'body-parser';
import postRoutes from './routes/postRoutes';
import userRoutes from './routes/userRoutes';
import indexRouter from './routes/index';

const app = express();

// Middlewares
app.use(bodyParser.json());

// Routes
app.use('/', indexRouter);
app.use('/users', userRoutes);
app.use('/posts', postRoutes);

export default app;
