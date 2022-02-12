import React from 'react';
import { useState } from 'react';

const Header = (props) => {
  const [formShowing, setFormShowing] = useState(false);

  return (
    <header className='grid grid-col-1-200px'>
      <h1>Movie Management System</h1>
      <button 
        className='btn btn-primary grid-x-right' 
        type='button'
        onClick={()=>{
          if(formShowing){
            props.onHideForm();
            setFormShowing(false);
          }else{
            props.onShowForm();
            setFormShowing(true);
          }
        }}
      >Add movie</button>
    </header>
  );
};

export default Header;
