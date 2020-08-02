import {
  GET_UPCOMING_HOLIDAYS,
  SET_LOADING,
  GET_COUNTRIES,
  SET_TABLE,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_UPCOMING_HOLIDAYS:
      return {
        ...state,
        upcomingHolidays: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        loading: false,
      };
    case SET_TABLE:
      return {
        ...state,
        table: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
