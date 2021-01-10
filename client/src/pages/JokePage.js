import { useState, useEffect } from 'react';
import axios from 'axios';
import Joke from '../components/Joke';
import VoteButton from '../components/VoteButton';

export default () => {
  const [joke, setJoke] = useState({});
  const [vote, setVote] = useState('');

  const getJoke = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/joke/random');
      setJoke(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => getJoke(), []);

  const handleVote = async (vote) => {
    try {
      await axios.put('http://localhost:4000/api/joke/vote',
        {
          officialJokeApiId: joke.id,
          type: joke.type,
          setup: joke.setup,
          punchline: joke.punchline,
          vote: vote
        }
      );
      setVote(vote);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {joke.setup
        ? (
          <Joke
            setup={joke.setup}
            punchline={joke.punchline}
          />
          )
        : (
          <Joke
            setup='Is your server running?'
            punchline='You had better go catch it!'
          />
          )}
      <br aria-hidden='true' />
      <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around' }}>
        <VoteButton down handleVote={handleVote} />
        <VoteButton up handleVote={handleVote} />
      </div>
    </>
  );
};
