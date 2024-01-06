require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;

MongoClient.connect(process.env.MONGO_URL, function(err, db) {
  if (err) {
    throw err;
  }
  db.collection('mammals').find().toArray(function(err, result) {
    if (err) {
      throw err;
    }
    console.log(result);
  });
});