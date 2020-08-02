import React from 'react';

const UpcomingItem = ({ holiday }) => {
  return (
    <tr>
      <td>{holiday.date}</td>
      <td>{holiday.countryCode}</td>
      <td>{holiday.name}</td>
    </tr>
  );
};

export default UpcomingItem;
