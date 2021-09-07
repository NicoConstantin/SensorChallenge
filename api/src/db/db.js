const { MongoClient } = require('mongodb');
const { mongoUser, mongoPass } = require ("../utils/config")
const uri = `mongodb+srv://${mongoUser}:${mongoPass}@clustersensor.pvxnq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
    try {
        await client.connect();
        console.log("Connected correctly to MongoDB Atlas");
    } catch (err) {
        console.log(err.stack);
    }
    finally {
        await client.close();
    }
}

module.exports = run