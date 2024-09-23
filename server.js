const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./_config');
const path = require('path');
require('dotenv').config();


// Define routes
let index = require('./routes/index');
let image = require('./routes/image');

// Connecting to the database using MongoDB Atlas
const mongoURI = process.env.MONGODB_URI || config.mongoURI.development; // Change to production or test as needed
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) console.log(err);
});

// Test if the database has connected successfully
let db = mongoose.connection;
db.once('open', () => {
    console.log('Database connected successfully');
});

// Initializing the app
const app = express();

// View Engine
app.set('view engine', 'ejs');

// Set up the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Body parser middleware
app.use(express.json());

// Routes
app.use('/', index);
app.use('/image', image);

// Determine the port dynamically (from command-line argument, environment variable, or default to 5000)
const PORT = process.argv[2] || process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
});
