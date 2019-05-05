const express = require("express");
const movieRoutes = require("./routes/movie");
const server = express();

// JSON API MIDDLEWARE
server.use(express.json());

// Static file serving middleware
server.use(express.static("./public"));

//Add movie routes
server.use("/api/movie", movieRoutes);

module.exports = server;
