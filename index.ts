const express = require('express');
const { connectToDatabase } = require('./services/db.service');
require('dotenv').config();

// create new app
const app = express();

connectToDatabase().catch((error: Error) => {
    console.error('Database connection failed', error);
    process.exit();
});

app.use(express.json());

app.get('/', (req: any, res: any) => {
    res.send('The sedulous hyena ate the antelope!');
});

// start the Express server
app.listen(3000, () => {
    console.log('Server started at http://localhost:3000');
});
