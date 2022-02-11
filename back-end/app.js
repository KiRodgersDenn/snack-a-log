// DEPENDENCIES

const express = require("express");

// CONFIGURATION
const app = express();
const cors = require("cors");

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROUTES
app.get("/", (req,res)=>{
    res.send("<h1>Welcome to our Snack-A-Log</h1>");
});
app.get("/", )

// EXPORT
module.exports = app;
