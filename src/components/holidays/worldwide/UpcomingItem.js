import React from 'react';
import { Link } from 'react-router-dom';

const UpcomingItem = ({ holiday }) => {
  return (
    <tr>
      <td>{holiday.date}</td>
      <td>
        <Link to={`/countries/${holiday.countryCode}`}>
          {holiday.countryCode}
        </Link>
      </td>
      <td>{holiday.name}</td>
    </tr>
  );
};

export default UpcomingItem;
