const express= require('express')
const router = express.Router(); 

const person=require('./../models/personschema')
router.post('/person',async(req,res)=>{
    try{
        const data = req.body
        const newperson=person(data)
        const personsaved =  await newperson.save()
        console.log('student saved')
        res.status(200).json(personsaved)
        
    
    }catch(err){
        console.log(err);
        res.status(500).json({error: "interal server error"});
        }
})
router.get('/person/:worktype',async(req,res)=>{
    try{
    const worktype= req.params.worktype// dtatabase se dta fetch karane ke liye
 if(worktype=='chef'||worktype=='manager'||worktype=='waiter'){
    const response=await person.find({work:worktype})
    res.status(200).json(data)
}else{
    res.status(404).json({error:'invalid worktype'})
} }catch(err){
    res.status(500).json({error:'internl server error'})
}})
/// now we make method to delete or update
router.put('/person/:id',(req,res)=>{
    const personid=req.params.id
    

})





  module.exports=router
  