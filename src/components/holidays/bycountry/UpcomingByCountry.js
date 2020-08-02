import React, { useEffect, useContext } from 'react';
import UpcomingItem from './UpcomingItem';
import HolidayContext from '../../../context/holiday/holidayContext';
import Spinner from '../../layout/Spinner';

const UpcomingByCountry = () => {
  const { loading, upcomingHolidays, getUpcomingByCountry } = useContext(
    HolidayContext
  );

  if (loading === true) {
    return <Spinner />;
  } else {
    return (
      <div>
        TheSecondOne
        <table className='table'>
          <caption>Upcoming Public Holidays</caption>
          <thead>
            <tr>
              <th scope='col'>Date</th>
              <th scope='col'>Country</th>
              <th scope='col'>Name</th>
            </tr>
          </thead>
          <tbody>
            {upcomingHolidays.map((holiday) => (
              <UpcomingItem
                key={`${holiday.countryCode}-${holiday.name}-${holiday.date}`}
                holiday={holiday}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
};

export default UpcomingByCountry;
