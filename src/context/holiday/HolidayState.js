import React, { useReducer } from 'react';
import axios from 'axios';
import HolidayContext from './holidayContext';
import HolidayReducer from './holidayReducer';
import { GET_UPCOMING_HOLIDAYS, SET_LOADING, GET_COUNTRIES } from '../types';

const HolidayState = (props) => {
  const initialState = {
    upcomingHolidays: [],
    countries: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(HolidayReducer, initialState);

  // Get upcoming Worldwide Holidays
  const getUpcomingWorldwide = async () => {
    setLoading();

    const res = await axios.get(
      'https://cors-anywhere.herokuapp.com/https://date.nager.at/Api/v2/NextPublicHolidaysWorldwide'
    );

    dispatch({
      type: GET_UPCOMING_HOLIDAYS,
      payload: res.data,
    });
  };

  // Get Upcoming Holidays by country
  const getUpcomingByCountry = async (countryCode) => {
    setLoading();

    const res = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://date.nager.at/Api/v2/NextPublicHolidays/${countryCode}`
    );

    dispatch({
      type: GET_UPCOMING_HOLIDAYS,
      payload: res.data,
    });
  };

  // Get Available countries
  const getCountries = async () => {
    setLoading();

    const res = await axios.get(
      'https://cors-anywhere.herokuapp.com/https://date.nager.at/Api/v2/AvailableCountries'
    );

    dispatch({
      type: GET_COUNTRIES,
      payload: res.data,
    });
  };

  //setLoading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <HolidayContext.Provider
      value={{
        upcomingHolidays: state.upcomingHolidays,
        loading: state.loading,
        countries: state.countries,
        table: state.table,
        getUpcomingWorldwide,
        getUpcomingByCountry,
        getCountries,
      }}
    >
      {props.children}
    </HolidayContext.Provider>
  );
};

export default HolidayState;
