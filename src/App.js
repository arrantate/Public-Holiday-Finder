import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import './App.css';
import HolidayState from './context/holiday/HolidayState';

const App = () => {
  return (
    <HolidayState>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </Router>
    </HolidayState>
  );
};

export default App;
