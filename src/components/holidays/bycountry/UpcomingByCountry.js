import React, { useContext, useEffect } from 'react';
import UpcomingItem from './UpcomingItem';
import HolidayContext from '../../../context/holiday/holidayContext';
import Spinner from '../../layout/Spinner';

const UpcomingByCountry = ({ match }) => {
  const { loading, upcomingHolidays, getUpcomingByCountry } = useContext(
    HolidayContext
  );

  useEffect(() => {
    getUpcomingByCountry(match.params.country);
    // eslint-disable-next-line
  }, []);

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
