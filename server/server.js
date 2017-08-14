const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos})
  }, (e) => {
    res.status(400).send(e)
  });
});

app.get('/todos/:id', (req, res) => {
  var id = req.params.id;

  if (!ObjectID.isValid(id)) {
    res.status(404).send();
  }

  Todo.findById(id).then((todo) => {
    if(!todo){
      return res.status(404).send();
    }
    res.status(200).send({todo});
  }).catch((e) => {
    res.status(400).send();
  });

});

app.listen(port, () => {
  console.log(`Started on port ${port}`);
});

module.exports = {app};

// var Todo = mongoose.model('Todo', {
//   text: {
//     type: String,
//     required: true,
//     minlength: 1,
//     trim: true
//   },
//   completed: {
//     type: Boolean,
//     default: false
//   },
//   completedAt: {
//     type: Number,
//     default: null
//   }
// });
//
// var User = mongoose.model('User', {
//   email: {
//     type: String,
//     required: true,
//     trim: true,
//     minlength:1
//   }
// });


// var user = new User({
//   email: 'josh@gmail.com    '
// });
//
// user.save().then((doc) => {
//   console.log('User saved', doc);
// }, (e) => {
//   console.log('Error',e);
// });


// newTodo.save().then((doc) => {
//   console.log('Saved todo', doc);
// }, (e) => {
//   console.log('Unable to save Todo');
// });

// var newTodo = new Todo({
//   text: 'Cook dinner'
// });
//
// var nextTodo = new Todo({
//   text: 'Feed to Cat',
//   completed: true,
//   completedAt: 123
// });

// nextTodo.save().then((doc) => {
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//   console.log('Error',e);
// });
