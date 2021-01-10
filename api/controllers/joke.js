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

// submit joke vote
joke.put('/vote', async (req, res) => {
  console.log(req.body);
  if (!req.body.vote) res.status(400).json('no vote detected');
  else {
    try {
      // find joke
      const joke = Joke.find({ setup: req.body.setup });
      // if joke exists
      if (joke) {
        // add the vote to it
        const newJoke = Joke.findByIdAndUpdate(joke.id, { ...joke, votes: [...joke.votes, req.body.vote] });
        res.status(200).json(newJoke);
      } else {
        // create the joke and add the vote
        const newJoke = Joke.create({ ...req.body, vote: [req.body.vote] });
        res.status(200).json(newJoke);
      }
      console.log(joke);
      res.status(200).json({});
    } catch (error) {
      res.status(400).json(error);
    }
  }
});

module.exports = joke;
