const express = require('express')
const app = express();
app.use(express.json())
const mongodb = require('./mongodb/mongodb.connect')
mongodb.connect()

const todoRoute = require('./routes/todo.routes')

app.get('/',(req,res)=>{
  res.json('hello')
})
app.use('/todo',todoRoute)


module.exports = app