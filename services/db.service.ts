import { MongoClient, type Db, type Collection } from 'mongodb';

export const collections: { schedules?: Collection } = {};

export async function connectToDatabase(): Promise<void> {
    const client: MongoClient = new MongoClient(
        process.env.MONGODB_CONN_STRING!
    );

    await client.connect();
    const db: Db = client.db(process.env.DB_NAME);
    const scheduleCollection: Collection = db.collection(
        process.env.GAMES_COLLECTION_NAME!
    );
    collections.schedules = scheduleCollection;

    console.log(
        `Successfully connected to database: ${db.databaseName} and collection: ${scheduleCollection.collectionName}`
    );
}
