const express = require("express");
const app = express();
const notesRoutes = require("./routes/notesRoutes");
const connectDB = require("./config/db");
const dotenv = require("dotenv") 
const PORT = process.env.PORT || 5000;
dotenv.config();
app.use(express.json())
// console.log(process.env.MONGO_DB_URI);

app.use("/api/notes",notesRoutes) 

connectDB();

app.listen(PORT,()=>{
  console.log(`server is runnig port number is ${PORT}`);
})  


// app.get("/", (req, res) => {
//   res.send("<h1>Hello World</h1>");
// });

// app.get("/api/notes",(req,res)=>{
//   res.send("Api is working ");
// })  

// app.post("/api/notes",(req,res)=>{
//   res.json({
//     message:"User data added successfully "
//   });
// })

// app.put("/app/notes/:id",(req,res)=>{
//   res.send("user data updated successfully") 
// })

// app.post("/app/notes/:id",(req,res)=>{
//   console.log("user data delete successfully")

// }) 
