import React from 'react';
import { useState } from 'react';

const Movieform = (props) => {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [errorTitle, setErrorTitle] = useState("");
  const [errorDescription, setErrorDescription] = useState("");

  const validateForm = ()=>{
    let isValidated = true;
    if(title === ""){
      setErrorTitle("Title is missing!");
      isValidated = false;
    }else{
      setErrorTitle("");
    }
    if(description === ""){
      setErrorDescription("Description is missing!");
      isValidated = false;
    }else{
      setErrorDescription("");
    }
    return isValidated;
  }

  const changeTitle = (event)=>{
    setTitle(event.target.value);
  }

  const changeDescription = (event)=>{
    setDescription(event.target.value);
  }

  return (
    <section className={props.visible === true ? '' : 'hide'}>
      <form action="">

        <div className='form-control-container'>
          <label htmlFor='title'> Title</label>
          <input 
            className='form-control' 
            type="text" id="title" 
            value={title}
            onChange={changeTitle}
          />
          <span className='error'>{errorTitle}</span>
        </div>

        <div className='form-control-container'>
          <label htmlFor="description">Description</label>
          <textarea 
            className='form-control' 
            id='description' 
            value={description} 
            onChange={changeDescription}
          ></textarea>
          <span className='error'>{errorDescription}</span>
        </div>

        <div className='form-control-container'>
          <button 
            className='btn btn-primary' 
            type='button' onClick={()=>{
              if(validateForm()){
                const newMovie = {
                  id: Math.floor(Math.random()*500000)+1,
                  title,
                  description
                }
                props.onAddMovie(newMovie);
                setTitle("");
                setDescription("");
              }
            }}
          >
            Save movie
          </button>
        </div>
        
      </form>
    </section>
  );
};

export default Movieform;
