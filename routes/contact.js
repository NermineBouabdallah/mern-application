

const express=require('express')
const router=express.Router();
const contact=require('../models/contact')

//post one contact
//method post
//path http://localhost:5000/api/contact
//params body
router.post("/", async(req, res) => {
  try{  let newContact = new contact({...req.body});
let result=await   newContact.save()
res.send({result:result, msg:"contact added"})
  }
catch(error){
res.send(error)
}
  
  
 
  });

  //get all contact
 //method get
 //path http://localhost:5000/api/contact

 router.get('/', async(req, res) => {
   try{
     let result=await contact.find()
     res.send({result:result, msg:"all contacts"})
   }
   catch(error){
     res.send("error")
   }
 })

 //get one contact
 //method get
//path http://localhost:5000/api/contact/:id
//params _id
router.get('/:id', async(req, res) => {
  try{
    let result=await contact.findOne({_id:req.params.id})
    res.send({result:result, msg:"contact found"})
  }
  catch(error){
    res.send("error")
  }
})

//delete one contact
 //method delete
//path http://localhost:5000/api/contact/:id
//params _id
router.delete('/:id', async(req, res) => {
  try{
    let result=await contact.deleteOne({_id:req.params.id})
   result.n? res.send({result:result, msg:"contact deleted"}):res.send({result:result,msg:'already deleted'})
  }
  catch(error){
    res.send("error")
  }
})

//update one contact
 //method put
//path http://localhost:5000/api/contact/:id
//params _id and body
router.put('/:id', async(req, res) => {
  try{
    let result=await contact.updateOne({_id:req.params.id},{$set:{...req.body}})
   res.send({result:result, msg:"contact updated"})
  }
  catch(error){
    res.send("error")
  }
})



  module.exports = router;