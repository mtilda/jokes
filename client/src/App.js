import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import JokePage from './pages/JokePage';

function App () {
  return (
    <div className='app'>
      <Switch>
        <Route path='/joke' component={JokePage} />
        <Redirect from='*' to='joke' />
      </Switch>
    </div>
  );
}

export default App;
