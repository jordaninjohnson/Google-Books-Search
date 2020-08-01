const express = require("express");
const mongojs = require("mongojs");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 3001;

//setting up Mongodb
const databaseUrl = "googlebooks";
const collections = ["books"];
const db = mongojs(databaseUrl, collections);

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use(express.static("/client/public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", {
  useNewUrlParser: true,
  useFindAndModify: false
});

db.on("error", error => {
  console.log("Database Error:", error);
});

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const apiRouter = require("./routes/api.js");

app.use('/api', apiRouter);

// Define any API routes before this runs
app.get("*", function(req, res) {
  res.json("hello");
  // Send every request to the React app
  //res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
