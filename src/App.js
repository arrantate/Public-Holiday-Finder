import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import './App.css';
import HolidayState from './context/holiday/HolidayState';
import UpcomingWorldwide from './components/holidays/worldwide/UpcomingWorldwide';
import Countries from './components/pages/Countries';
import UpcomingByCountry from './components/holidays/bycountry/UpcomingByCountry';

const App = () => {
  return (
    <HolidayState>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={UpcomingWorldwide} />
          <Route exact path='/countries' component={Countries} />
          <Route
            exact
            path='/countries/:country'
            component={UpcomingByCountry}
          />
        </Switch>
      </Router>
    </HolidayState>
  );
};

export default App;
