require("dotenv").config();
const express = require('express');
const path = require('path');
const logger = require('morgan');
const cors = require('cors');
require('./config/database');
const articleController = require('./routes/api/articles');

// Middleware
const app = express();
app.use(cors());
app.use(logger('dev'));
app.use(express.json());


// app.use(express.static(path.join(__dirname, 'build')));

// API routes
app.use("/articles", articleController);

// Catch all route
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


const port = process.env.PORT || 3001;

app.listen(port, function () {
    console.log(`Express app running on port ${port}`)
});