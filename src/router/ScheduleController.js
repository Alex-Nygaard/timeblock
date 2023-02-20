import express from 'express';
import db from '../db/dbCon.js';

const ScheduleController = express.Router();

ScheduleController.get('/', async (req, res) => {
    const collection = db.collection(process.env.MONGO_COLLECTION_NAME || '');
    const results = await collection.find({}).toArray();
    console.log('GET results: ', results);
    res.send(results).status(200);
});

ScheduleController.post('/', async (req, res) => {
    const collection = db.collection(process.env.MONGO_COLLECTION_NAME || '');
    const results = await collection.insertOne(req.body);
    console.log('POST results: ', results);
    res.send(results).status(201);
});

export default ScheduleController;
