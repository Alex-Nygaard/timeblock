import express from 'express';
// import db from '../db/dbCon.js';
import { UserModel } from '../db/models/index.js';

const UserController = express.Router();

UserController.get('/', async (req, res) => {
    const results = await UserModel.find({}).lean();
    console.log('GET results: ', results);
    res.send(results).status(200);
});

UserController.post('/', async (req, res) => {
    try {
        const results = await UserModel.create(req.body);
        console.log('POST results: ', results);
        res.send(results).status(201);
    } catch (error) {
        console.error(error);
        res.sendStatus(400);
    }
});

export default UserController;
