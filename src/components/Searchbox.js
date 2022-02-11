import React from 'react';

const Searchbox = () => {
  return (
    <section className='search-box-container'>
      <form action="" className='grid grid-col-1'>
        <input type="text" placeholder='Enter Movie Title' className='form-control' id='filter'/>
      </form>
    </section>
  );
};

export default Searchbox;
