import React from 'react';

const Movieform = () => {
  return (
    <section className=''>
      <form action="">

        <div className='form-control-container'>
          <label htmlFor='title'> Title</label>
          <input className='form-control' type="text" id="title"  />
          {/* <span className='error'>Missing </span> */}
        </div>

        <div className='form-control-container'>
          <label htmlFor="description">Description</label>
          <textarea className='form-control' id='description'></textarea>
          {/* <span className='error'>Missing</span> */}
        </div>

        <div className='form-control-container'>
          <button className='btn btn-primary' type='button'>Save movie</button>
        </div>
        
      </form>
    </section>
  );
};

export default Movieform;
