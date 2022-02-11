// DEPENDENCIES

const express = require("express");
const snackController = require('./controllers/snackController.js')

// CONFIGURATION
const app = express();
const cors = require("cors");

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use('/snacks',snackController)

// ROUTES
app.get("/", (req,res)=>{
    res.send("Get Snack'n at Snack-a-log!");
});
//catch all err message
app.get("*",(req,res)=>{
    req.status(404).send('page not found');
} )

// EXPORT
module.exports = app;
