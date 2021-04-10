const mongoose = require('mongoose')

async function connect(){
  try{
    await mongoose.connect("mongodb://localhost/test-jest",{ useUnifiedTopology: true } )
    console.log('conect to mongodb')
  }catch(e){
    console.log('Error to connect Mongodb' + e)
  }
}

module.exports = {connect}