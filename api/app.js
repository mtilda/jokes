// ───────────────────
// Dependencies
// ───────────────────
const express = require('express');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const cors = require('cors');

// Configuration
require('dotenv').config();
const app = express();
const db = mongoose.connection;

// ───────────────────
// Port
// ───────────────────
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 4000;

// ───────────────────
// Database
// ───────────────────
// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:8080';

// ───────────────────
// Middleware
// ───────────────────

// use public folder for static assets
app.use(express.static('public'));
// use method override to allow all method types
app.use(methodOverride('_method'));
// populates req.body with parsed info from forms
// if no data from forms will return an empty object {}
app.use(express.urlencoded({ extended: true }));
// only parses JSON
app.use(express.json());
// enable cross origin resource sharing
app.use(cors());

// Connect to Mongo
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Error / success
db.on('error', (err) => console.error('ERROR:', err.message));
db.on('connected', () => console.log('Mongo connected'));
db.on('disconnected', () => console.warn('Mongo disconnected'));

// ───────────────────
// Controllers
// ───────────────────
const jokeController = require('./controllers/joke.js');
app.use('/api/joke', jokeController);

// ───────────────────
// Routes
// ───────────────────
app.get('/', (req, res) => {
  res.send('Hello!');
});

// ───────────────────
// Listener
// ───────────────────
app.listen(PORT, (req, res) => console.log('Listening on port:', PORT));
