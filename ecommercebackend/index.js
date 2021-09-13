const express = require("express")
require("./connection")
const cors = require("cors") 
const mongoose = require("mongoose")
const User = require("./Schema")
const app = express()

app.use(express.json())


const port = process.env.PORT || 8000
app.use(cors())
app.get("/",(req,res)=>{
    res.status(200).send("Hello")


})
// using promises
// app.post("/signup",(req,res)=>{
//   console.log(req.body)
//   const data = new User(req.body)
//   data.save().then(()=>{
//     res.status(201).send(data)
//   }).catch((e)=>{
//     res.status(400).send(e)
//   })
// })

//using async-await
app.post("/signup",async(req,res)=>{
try{
 const data = new User(req.body)
 const createData = await data.save()
 res.status(201).send(createData)
}catch(e){
    res.status(400).send(e)
  }
})

app.get("/signup",async(req,res)=>{
  try{
const studentsData = await User.find()
res.send(studentsData)
  }catch(e){
res.send(e)
  }
})

app.post('/login', async(req,res)=>{
try{
  const email = req.body.email
  const password = req.body.password
  const useremail = await User.findOne({email:email})
  
  if(useremail.password === password){
    res.status(201).json({msg:"user login  successfully"})
  }else{
    res.json({msg:"Invalid login details"})
  }
  
}catch(e){
res.status(400).json({msg:"Invalid login details"})
}
    
});

app.listen(port,()=>console.log(`server is running on port ${port}`))