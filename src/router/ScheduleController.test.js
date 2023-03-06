import express from 'express';
import request from 'supertest';
import ScheduleController from './ScheduleController.js';

const app = new express();
app.use(express.json());
app.use('/', ScheduleController);

describe('ScheduleController', () => {
    test('GET /', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual([]);
    });
});
