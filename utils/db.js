require('dotenv').config();

const { MongoClient, ObjectId } = require('mongodb');

const mongoUri = process.env.MONGODB_URI;

// Connect to MongoDB
async function connectToDB() {
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db('cctv_dashboardDB');
    db.client = client;
    return db;
}

module.exports = { connectToDB, ObjectId };