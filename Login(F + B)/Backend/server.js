const express = require("express")
const app= express()
const Mongodb = require("./src/config/db")
const User = require("./src/models/userdata")

const bcrypt = require("bcrypt")

require("dotenv").config();

const PORT = process.env.PORT;
// const MONGO_DB_URI = process.env.MONGO_DB_URI;

// console.log(PORT);
// console.log(MONGO_DB_URI);

app.use(express.json());

app.post("/signin" ,async(req,res)=>{
  const {email,password} = req.body;
 const hashedPassword = await bcrypt.hash(password, 10);
 console.log(hashedPassword) 
  const newdata = new User({
    email,password:hashedPassword
  })
  await newdata.save();
  console.log(newdata)
  res.json({
    "message":newdata,
    "status":"Data got succesfullly "
  })
})


Mongodb().then(()=>{
  app.listen(PORT,()=>{
    console.log("server is running port number 5000") 
  })
})
.catch(()=>{
  console.log("something went wrong ") 
})

// const mongoose = require("mongoose");
// mongoose.connect("mongodb+srv://vasumukku:vasu12345@vasu-01.gdjpkob.mongodb.net/notes_db?appName=vasu-01")
// .then(()=>{
//   console.log("Database is connected successfully");
//   app.listen(PORT,()=>{
//   console.log("server is running port number 5000 ........") 

// })
// })
// .catch(()=>{
//   console.log("Database is not connected") 
// })


