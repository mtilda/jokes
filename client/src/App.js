import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Joke from './components/Joke';
import VoteButton from './components/VoteButton';

function App () {
  const [joke, setJoke] = useState();
  const [stats, setStats] = useState({});

  const getJoke = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/joke/random');
      setJoke(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setStats({});
    }
  };
  useEffect(() => getJoke(), []);

  const handleVote = async (vote) => {
    try {
      const response = await axios.put('http://localhost:4000/api/joke/vote',
        {
          officialJokeApiId: joke.id,
          type: joke.type,
          setup: joke.setup,
          punchline: joke.punchline,
          vote: vote
        });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setStats({});
    }
  };

  return (
    <div className='app'>
      {joke
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
    </div>
  );
}

export default App;
