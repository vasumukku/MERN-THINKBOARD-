const mongoose = require("mongoose");

const CONNECTDB = () => {
  // ✅ return the promise
  return mongoose.connect(process.env.MONGO_DB_URI)
    .then(() => {
      console.log("MONGODB CONNECTED SUCCESSFULLY");
    })
    .catch((e) => {
      console.log("ERROR CONNECTING TO MONGODB " + e.message);
      process.exit(1);
    });
};

module.exports = CONNECTDB;