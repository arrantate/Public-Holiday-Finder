import React from 'react';
import { Link } from 'react-router-dom';

const CountryItem = ({ country: { key, value } }) => {
  return (
    <tr>
      <td>
        <Link to={`/countries/${key}`} className='btn btn-outline-secondary'>
          {value}
        </Link>
      </td>
      <td>{key}</td>
    </tr>
  );
};

export default CountryItem;
