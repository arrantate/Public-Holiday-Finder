import React, { useContext } from 'react';
import UpcomingByCountry from '../holidays/bycountry/UpcomingByCountry';
import HolidayContext from '../../context/holiday/holidayContext';

const CountryItem = ({ country: { key, value } }) => {
  const { getUpcomingByCountry, setTable } = useContext(HolidayContext);

  return (
    <tr>
      <td>
        <button
          type='button'
          className='btn btn-outline-secondary'
          onClick={() => {
            getUpcomingByCountry({ key });
            setTable(<UpcomingByCountry />);
          }}
        >
          {value}
        </button>
      </td>
      <td>{key}</td>
    </tr>
  );
};

export default CountryItem;
