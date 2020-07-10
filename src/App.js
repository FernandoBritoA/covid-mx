import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import StatsPage from './pages/StatsPage/StatsPage';

const App = () => {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/stats' component={StatsPage} />
      </Switch>
    </div>
  );
};

export default App;
