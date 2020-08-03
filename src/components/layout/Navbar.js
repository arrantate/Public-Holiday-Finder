import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Fragment>
      <nav className='navbar navbar-light bg-light justify-content-between'>
        <span>
          <i className='fa fa-caravan' />{' '}
          <div className='navbar-brand'>Public Holidays</div>
        </span>
      </nav>
      <div style={{ margin: '0.5em' }}>
        <Link to='/' className='btn btn-outline-secondary'>
          Worldwide
        </Link>{' '}
        <Link to='/countries' className='btn btn-outline-secondary'>
          By Country
        </Link>
      </div>
    </Fragment>
  );
};

export default Navbar;
