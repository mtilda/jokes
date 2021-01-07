const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jokeSchema = new Schema({
  officialJokeApiId: { type: Number, required: false },
  type: { type: String, required: false },
  setup: { type: String, required: true },
  punchline: { type: String, required: true },
  upvotes: { type: Number, required: true },
  downvotes: { type: Number, required: true }
});

const Joke = mongoose.model('Joke', jokeSchema);

module.exports = Joke;
