const express = require("express");
const app = express();
const notesRoutes = require("./routes/notesRoutes");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const rateLimiter = require("./middlewares/rateLimiter");

dotenv.config();

const PORT = process.env.PORT || 5000;

app.use(express.json());

// ✅ Apply rate limiter BEFORE routes
app.use(rateLimiter);

app.use("/api/notes", notesRoutes);

connectDB()
  .then(() => {
    console.log("Database connected successfully");

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Database connection failed:", error);
  });

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
