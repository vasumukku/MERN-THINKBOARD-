const mongoose= require('mongoose');

const Mongodb = ()=>{
  return(
    mongoose.connect(process.env.MONGO_DB_URI)
.then(()=>{
  console.log("Database connected successfully");
})
.catch(()=>{
  console.log("Database not connected  something wrong ");
})
  )
}

module.exports= Mongodb;