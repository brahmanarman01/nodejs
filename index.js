const express =require('express');
const app=express();
const db = require('./db');

const bodyParser=require("body-parser");
app.use(bodyParser.json())//req.body

const person=require('./models/personschema')

app.get('/home',(req,res)=>{
res.send('server is working on localhost3000')
})
const personroutes=require('./routes/personroutes')
 app.use('/person',personroutes) 
app.listen(3000,()=>{ 
    console.log("our server is live")
})
