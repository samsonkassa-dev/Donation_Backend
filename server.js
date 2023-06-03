import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import connectDatabase from './db.js';
import { errorHandler, notFound } from './error.js';

import dataRoute from './data.js';

dotenv.config();

connectDatabase();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/', dataRoute);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 3002 ;

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
