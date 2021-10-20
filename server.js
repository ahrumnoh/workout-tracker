// Global Dependencies
const logger = require("morgan");
const mongoose = require("mongoose");
const express = require("express");

// Establish PORT Connection
const PORT = process.env.PORT || 3000;
const app = express();

// Middleware
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set static files to public folder
app.use(express.static("public"));


mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/workout", 
  { 
    useNewUrlParser: true, 
    useFindAndModify: false,
    useCreateIndex: true,
    useFindAndModify:false 
  }
); // Following initial setup in seed.js



// Routes
app.use(require("./routes/api"));
app.use(require("./routes/html"));


// Initiate server
app.listen(PORT, () => {
  console.log(`Port 3000 is running now🚀 ${PORT}!`);
});


