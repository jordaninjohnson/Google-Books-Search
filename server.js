const express = require("express");
const mongojs = require("mongojs");
const logger = require("morgan");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

//setting up Mongodb
const databaseUrl = "googlebooks";
const collections = ["books"];
const db = mongojs(databaseUrl, collections);

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("/client/public"));

db.on("error", error => {
  console.log("Database Error:", error);
});

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.json("hello");
  //res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
