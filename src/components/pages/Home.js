import React, { useState, Fragment } from 'react';
import UpcomingWorldwide from '../holidays/worldwide/UpcomingWorldwide';
import Countries from './Countries';

const Home = () => {
  const [table, setTable] = useState(<UpcomingWorldwide />);

  return (
    <Fragment>
      <div style={{ margin: '0.5em' }}>
        <button
          type='button'
          className='btn btn-outline-secondary'
          onClick={() => setTable(<UpcomingWorldwide />)}
        >
          Worldwide
        </button>{' '}
        <button
          type='button'
          className='btn btn-outline-secondary'
          onClick={() => setTable(<Countries />)}
        >
          By Country
        </button>
      </div>
      <div>{table}</div>
    </Fragment>
  );
};

export default Home;
