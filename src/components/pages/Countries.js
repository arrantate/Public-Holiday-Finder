import React, { useEffect, useContext } from 'react';
import CountryItem from './CountryItem';
import HolidayContext from '../../context/holiday/holidayContext';
import Spinner from '../layout/Spinner';

const Countries = () => {
  const { loading, countries, getCountries } = useContext(HolidayContext);

  useEffect(() => {
    getCountries();
    // eslint-disable-next-line
  }, []);

  if (loading === true) {
    return <Spinner />;
  } else {
    return (
      <div>
        <table className='table'>
          <caption>Available Countries</caption>
          <thead>
            <tr>
              <th scope='col'>Country</th>
              <th scope='col'>Code</th>
            </tr>
          </thead>
          <tbody>
            {countries.map((country) => (
              <CountryItem key={country.key} country={country} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
};

export default Countries;
