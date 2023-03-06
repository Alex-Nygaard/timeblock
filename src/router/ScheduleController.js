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

ScheduleController.delete('/', async (req, res) => {
    try {
        if (!req.body.id) {
            throw new Error('No ID provided in request body');
        }
        const results = await ScheduleModel.findByIdAndDelete(req.body.id);
        console.log('DELETE results: ', results);
        res.send(results).status(200);
    } catch (error) {
        console.error(error);
        res.sendStatus(400);
    }
});

// Update a schedule
ScheduleController.put('/', async (req, res) => {
    try {
        if (!req.body.id) {
            throw new Error('No ID provided in request body');
        }
        const id = req.body.id;
        delete req.body.id;
        delete req.body.activities;
        const results = await ScheduleModel.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        console.log('PUT results: ', results);
        res.send(results).status(200);
    } catch (error) {
        console.error(error);
        res.sendStatus(400);
    }
});

ScheduleController.post('/add/:id', async (req, res) => {
    try {
        const results = await ScheduleModel.findById(req.params.id);
        results.activities.push(req.body);
        await results.save();
        console.log('POST results: ', results);
        res.send(results).status(201);
    } catch (error) {
        console.error(error);
        res.sendStatus(400);
    }
});

export default ScheduleController;
