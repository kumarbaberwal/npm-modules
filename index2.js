const { MongoClient } = require('mongodb');

// MongoDB connection URL
const url = 'mongodb://localhost:27017';
const dbName = 'Auth';

// Asynchronous IIFE to connect and query MongoDB
(async () => {
    try {
        // Create a new MongoClient
        const client = new MongoClient(url);
        
        // Connect to the MongoDB server
        await client.connect();
        console.log("Connected successfully to MongoDB server");

        // Select the database
        const db = client.db(dbName);

        // Select the 'users' collection
        const collection = db.collection('users');
        // Find all documents in the 'users' collection and convert them to an array
        const returnedData = await collection.find().toArray();
        
        // Print the returned data
        console.log(returnedData);
    } catch (error) {
        // Catch and log any errors
        console.error("Error while querying the database:", error);
    } finally{
        console.log("MongoDB connection closed");
    }
})();
