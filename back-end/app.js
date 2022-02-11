// DEPENDENCIES

const express = require("express");
const snacks = require('./controllers/snackController.js')

// CONFIGURATION
const app = express();
const cors = require("cors");

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use('snacks',snackController)

// ROUTES
app.get("/", (req,res)=>{
    res.send("<h1>Welcome to our Snack-A-Log</h1>");
});
//catch all err message
app.get("*",(req,res)=>{
    req.status(404).send('page not found');
} )

// EXPORT
module.exports = app;
