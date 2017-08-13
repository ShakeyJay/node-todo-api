const {MongoClient, ObjectID} = require('mongodb')


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('59907866b497053cf0b598fa')
  // },{
  //   $set: {
  //     completed: true
  //   }
  // },{
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5990791eef6b703d75cd6ae5')
  },{
    $set: {
      name: 'Josh'
    },
    $inc: {
      age: 1
    }
  },{
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });
  // db.close(); 5990791eef6b703d75cd6ae5
});
