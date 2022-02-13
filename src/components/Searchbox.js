import React from 'react';
import { useState } from 'react';

const Searchbox = (props) => {

  const [searchBox, setSearchBox] = useState("");

  return (
    <section className='search-box-container'>

      <form action="" className='grid grid-col-1'>
        <input 
          type="text" placeholder='Enter Movie Title To Search' 
          className='form-control' id='filter' 
          value={searchBox}
          onChange={(e)=>{
            setSearchBox(e.target.value);
            props.onFilterMovie(e.target.value);
          }}
        />
      </form>

    </section>
  );

};

export default Searchbox;
