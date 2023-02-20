// import { MongoClient, ServerApiVersion } from 'mongodb';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.MONGO_URI || '';
const client = mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

let conn;
try {
    conn = await client.connect();
} catch (e) {
    console.error(e);
}

const db = conn.db(process.env.MONGO_DBNAME || '');
export default db;
