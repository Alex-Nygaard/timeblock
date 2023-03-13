import express from 'express';
import request from 'supertest';
import { MongoMemoryServer } from 'mongodb-memory-server';
import ScheduleController from './ScheduleController.js';
import db from '../db/dbCon.js';

const app = new express();
app.use(express.json());
app.use('/', ScheduleController);

describe('ScheduleController', () => {
    let mongoServer;

    beforeAll(async () => {
        mongoServer = await MongoMemoryServer.create();
        await db.init(mongoServer.getUri());
    });

    afterAll(async () => {
        await db.close();
        await mongoServer.stop();
    });

    test('GET /', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual([]);
    });
});
