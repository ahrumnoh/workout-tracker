//Global Dependencies
const mongoose = require("mongoose");
const logger = require("morgan");
const express = require("express");


//Establish Port
const PORT = process.env.PORT || 3000;
const app = express();

//Middleware

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//Set static files to public folder
app.use(express.static("public"));


//Mongoose connect (Workout database)

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/workout",
    {
         useNewUrlParser: true, 
         useFindAndModify: false,
         useUnifiedTopology: true,
         useCreateIndex: true
    }
  );

//Routes

app.use(require("./routes/html"));
app.use(require("./routes/api"))



//Initiate server
app.listen(PORT, () => {
    console.log(`Currently the port 3000 ${PORT} has successfully been running`);
});

