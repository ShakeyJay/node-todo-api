const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '59909c35cc7bfb56a346c25a';

User.findById(id).then((user) => {
  if (!user) {
    return console.log('ID not found');
  }
  console.log(JSON.stringify(user,undefined,2));
}, (e) => {
  console.log('Error', e);
})

// var id = '5990aa85c7a72b61f578ac6911';
//
// if(!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }
//
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });
//
// Todo.findById(id).then((todo) => {
//   if(!todo){
//     return console.log('Id not found');
//   }
//   console.log('Todo by id', todo);
// }).catch((e) => console.log(e));
