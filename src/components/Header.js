import React from 'react';

const Header = (props) => {

  return (
    <header className='grid grid-col-1-200px'>
      <h1>Movie Management System</h1>
      <button 
        className='btn btn-primary grid-x-right' 
        type='button'
        onClick={props.onToggleForm}
      >Add movie</button>
    </header>
  );

};

export default Header;
