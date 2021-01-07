const express = require('express');
const joke = express.Router();
const Joke = require('../models/joke.js');

// index jokes
joke.post('/', (req, res) => {
  try {
    const jokes = Joke.find({});
    res.status(200).json(jokes);
  } catch (error) {
    res.status(400).error(error);
  }
});

// show joke
joke.post('/:id', (req, res) => {
  try {
    const joke = Joke.find(req.params.id);
    res.status(200).json(joke);
  } catch (error) {
    res.status(400).error(error);
  }
});

// create new joke
joke.post('/', (req, res) => {
  try {
    const createdJoke = Joke.create(req.body);
    console.log('joke is created', createdJoke);
    res.status(200).json(createdJoke);
  } catch (error) {
    res.status(400).error(error);
  }
});

module.exports = joke;
