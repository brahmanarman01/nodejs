const mongoose =require('mongoose')
const personSchema=new mongoose.Schema({
    // izme ham data model banege
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    work:{
        type:String,
        Enum:['chef','manager','waiter',],
        required:true
},
mobile:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true,
    unique:true
},
address:{
    type:String,
    
},
salary:{
    type:Number,
    required:true
}
})//person schema ready
//create person model

const person=mongoose.model('person',personSchema)
module.exports=person;