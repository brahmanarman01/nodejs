const mongoose =require('mongoose')
//define mongodb connection url
const mongourl='mongodb://localhost:27017/hotels'//ye connect hote hi apnr aap db  banalega
// setup mongodb connection\
mongoose.connect(mongourl, {
    useNewUrlParser: true,  // Fix typo here
    useUnifiedTopology: true
  });
//get default connection
//mongoose maintain default connection object represnting the mongodb connection
const db =mongoose.connection;//by using this db we establis connection between nodejs and mongdb
//define event listner for database connection
db.on('connected',()=>{
    console.log("connected to mongdb server")
})
db.on('error',(err)=>{
    console.error("connected to mongdb server",err)
})
db.on('disconnected',()=>{
    console.log("disconnected to mongdb server")
})
// Export database connection
module.exports = db;