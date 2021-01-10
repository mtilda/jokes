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
  console.log('body', req.body);
  if (!req.body.vote) {
    res.status(400).json('no vote detected');
    console.log('no vote');
  } else {
    try {
      // find joke
      const joke = await Joke.findOne({ setup: req.body.setup });
      // if joke exists
      if (joke) {
        console.log('joke found', joke);
        // add the vote to it
        const updatedJoke = await Joke.findByIdAndUpdate(joke.id, {
          votes: [
            ...joke.votes,
            {
              value:
                req.body.vote === 'up'
                  ? 1
                  : req.body.vote === 'down'
                    ? -1
                    : 0
            }
          ]
        });
        console.log('vote added to joke');
        console.log(updatedJoke);
        res.status(200).json(updatedJoke);
      } else {
        console.log('joke not found');
        // create the joke and add the vote
        const newJoke = await Joke.create({
          officialJokeApiId: req.body.officialJokeApiId,
          type: req.body.type,
          setup: req.body.setup,
          punchline: req.body.punchline,
          votes: [{
            value:
              req.body.vote === 'up'
                ? 1
                : req.body.vote === 'down'
                  ? -1
                  : 0
          }]
        });
        console.log('joke created');
        console.log(newJoke);
        res.status(200).json(newJoke);
      }
    } catch (error) {
      res.status(400).json(error);
    }
  }
});

module.exports = joke;
