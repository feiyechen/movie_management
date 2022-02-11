import React from 'react';

const Header = () => {
  return (
    <header className='grid grid-col-1-200px'>
      <h1>Movie Management System</h1>
      <button className='btn btn-primary grid-x-right' type='button'>Add movie</button>
    </header>
  );
};

export default Header;
