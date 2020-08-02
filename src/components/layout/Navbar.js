import React from 'react';

const Navbar = () => {
  return (
    <nav className='navbar navbar-light bg-light justify-content-between'>
      <span>
        <i className='fa fa-caravan' />{' '}
        <div className='navbar-brand'>Public Holidays</div>
      </span>
    </nav>
  );
};

export default Navbar;
