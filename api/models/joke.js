const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const voteSchema = new Schema({
  value: {
    type: Number,
    required: true,
    validate: [(value) => value === 0 || Math.abs(value) === 1, 'vote must be -1, 0, or +1']
  },
  dateTime: { type: Date, required: false }
});

const jokeSchema = new Schema({
  officialJokeApiId: { type: Number, required: false },
  type: { type: String, required: false },
  setup: { type: String, required: true, validate: [(value) => value.length > 0, 'setup must be a non-empty string'] },
  punchline: { type: String, required: true, validate: [(value) => value.length > 0, 'punchline must be a non-empty string'] },
  votes: [voteSchema]
});

const Joke = mongoose.model('Joke', jokeSchema);

module.exports = Joke;
