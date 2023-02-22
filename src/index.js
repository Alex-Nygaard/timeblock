import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
// import db from './db/dbCon.js';
import { ScheduleController, UserController } from './router/index.js';

dotenv.config();

const uri = process.env.MONGO_URI || '';
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const app = express();
app.use(express.json());

app.use('/schedule', ScheduleController);
app.use('/user', UserController);

app.get('/', async (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});
