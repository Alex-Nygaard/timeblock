import { MongoClient, ServerApiVersion } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.MONGO_URI || '';
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
});

let conn;
try {
    conn = await client.connect();
} catch (e) {
    console.error(e);
}

const db = conn.db(process.env.MONGO_DBNAME || '');
export default db;
