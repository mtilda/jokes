import { useState, useEffect } from 'react';
import axios from 'axios';
import Joke from '../components/Joke';
import VoteButton from '../components/VoteButton';
import ActivityIndicator from '../ui/ActivityIndicator';

export default () => {
  const [activity, setActivity] = useState(true);
  const [joke, setJoke] = useState({});
  const [vote, setVote] = useState('');

  const getJoke = async () => {
    await setActivity(true);
    try {
      const response = await axios.get('http://localhost:4000/api/joke/random');
      setJoke(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setTimeout(() => setActivity(false), 500);
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
      {activity
        ? <ActivityIndicator type='sentry' size='100px' speed={0.5} />
        : (
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
          )}
    </>
  );
};
