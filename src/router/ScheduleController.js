import express from 'express';
// import db from '../db/dbCon.js';
import { ScheduleModel } from '../db/models/index.js';

const ScheduleController = express.Router();

ScheduleController.get('/', async (req, res) => {
    const results = await ScheduleModel.find({}).lean();
    console.log('GET results: ', results);
    res.send(results).status(200);
});

ScheduleController.post('/', async (req, res) => {
    try {
        const results = await ScheduleModel.create(req.body);
        console.log('POST results: ', results);
        res.send(results).status(201);
    } catch (error) {
        console.error(error);
        res.sendStatus(400);
    }
});

export default ScheduleController;
