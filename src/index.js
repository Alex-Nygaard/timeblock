import express from 'express';
import dotenv from 'dotenv';
import db from './db/dbCon.js';
import { ScheduleController } from './router/index.js';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/schedule', ScheduleController);

app.get('/', async (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});
