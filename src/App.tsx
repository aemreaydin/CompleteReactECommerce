import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/Homepage/Homepage';
import ShopPage from './pages/Shoppage/Shoppage';
import './App.scss';

const App: React.FC = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
