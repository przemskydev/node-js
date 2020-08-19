

const { MongoClient, ObjectID } = require('mongodb');

const url = 'mongodb://127.0.0.1:27017';
const dbName = 'mongo-test';

MongoClient.connect(url, {}, (error, client) => {
  if (error) console.log(`Some error check connection...`);

  const db = client.db(dbName);
  const id = new ObjectID()
  // console.log(id.toHexString())
  db.collection('users').insertOne({
    _id: id,
    name: 'Dan',
    age: 23
  }, (error, result)=>{
    if(error) console.log(`Adding user error.`, error);

    console.log(result.ops)
  })

  // db.collection('users').find({
  //   age: { $gt: 35}
  // }).toArray((error, result)=>{
  //   if(error) console.log(`Can not find user`)

  //   console.log(result)
  // })


  // db.collection('users').updateOne({
  //   age: 143
  // }, {
  //   $set: {
  //     age: 93
  //   }
  // })

  // db.collection('users').deleteOne({
  //   age: 32
  // }, (error, result)=>console.log(result))

  db.collection('users').find({}).toArray((error, result) => console.log(result))

  console.log(`Database connection success.`);
})