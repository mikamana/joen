import express from 'express';
import ejs from 'ejs';
import newsRouter from './router/news.js';
import replysRouter from './router/reply.js';

const app = express();

app.use(express.json())

app.use('/news', newsRouter)
app.use('/reply', replysRouter)

app.listen(8080);
