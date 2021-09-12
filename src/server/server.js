const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const port = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true }))
app.use(cors());

//mongoose

//data schema and model

//API routes 
app.get('/', function(req, res) {
    res.send("express is here.")
})

app.listen(port, function() {
    console.log("express is running"); 
})
