import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Joke from './components/Joke';
import VoteButton from './components/VoteButton';

function App () {
  const [currentJoke, setCurrentJoke] = useState();

  const getJoke = async () => {
    try {
      const response = await axios('https://official-joke-api.appspot.com/random_joke');
      setCurrentJoke(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getJoke();
  }, []);

  return (
    <div className='app'>
      {currentJoke
        ? (
          <Joke
            setup={currentJoke.setup}
            punchline={currentJoke.punchline}
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
        <VoteButton down />
        <VoteButton up />
      </div>
    </div>
  );
}

export default App;
