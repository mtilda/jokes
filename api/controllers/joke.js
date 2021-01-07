const express = require('express');
const axios = require('axios');
const joke = express.Router();
const Joke = require('../models/joke.js');

// get random joke
joke.get('/random', async (req, res) => {
  try {
    const jokePromise = await axios.get('https://official-joke-api.appspot.com/random_joke');
    const joke = jokePromise.data;
    console.log(joke);
    res.status(200).json(joke);
  } catch (error) {
    res.status(400).json(error);
  }
});

// index jokes
joke.get('/', (req, res) => {
  try {
    const jokes = Joke.find({});
    res.status(200).json(jokes);
  } catch (error) {
    res.status(400).json(error);
  }
});

// show joke
joke.get('/:id', (req, res) => {
  try {
    const joke = Joke.find(req.params.id);
    res.status(200).json(joke);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = joke;
