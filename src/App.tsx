import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/Homepage';
import './App.scss';

const HatsPage : React.FC = () => (
  <h1>Hello Hats</h1>
)

const App: React.FC = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
