import '../css/App.css';
import Modal from './Modal';
import Header from './Header';
import Searchbox from './Searchbox';
import Movieform from './Movieform';
import Movies from './Movies';
import Footer from './Footer';
import { useState, useEffect } from 'react';

const App = () => {

  const [movies, setMovies] = useState([]);
  const [modal, setModal] = useState({
    msg: '',
    visible: false
  });
  const [formVisible, setformVisible] = useState(false);

  const addMovie = (newMovie)=>{
    localStorage.setItem("movies", JSON.stringify([...movies, newMovie]));
    setMovies([...movies, newMovie]);
    setModal({
      msg: `Movie 《${newMovie.title}》 was added successfully!`,
      visible: true
    });
  }

  //use props to pass down this function
  const deleteMovie = (id) => {
    const newMovies = movies.filter((item)=>{
      return item.id !== id;
    });
    localStorage.setItem("movies", JSON.stringify(newMovies));
    setMovies(newMovies);
    setModal({
      msg: `The movie with ID ${id} was deleted successfully!`,
      visible: true
    });
  }

  const hideModal = ()=>{
    setModal({
      msg: '',
      visible: false
    })
  }

  const toggleForm = ()=>{
    setformVisible(!formVisible);
  }

  //useEffect will fire off when the component finish loading
  useEffect(()=>{

    if(localStorage.getItem("movies"))
    {
      const newMovies = JSON.parse(localStorage.getItem("movies"));
      setMovies(newMovies);
    }

  }, []); //the [] means calling the function once
  
  return (
    <div className='container'>
      <Modal onHide={hideModal} modalState={modal}/>
      <Header onToggleForm={toggleForm}/>
      <Searchbox />
      <main>
        <Movieform onAddMovie={addMovie} visible={formVisible}/>
        <Movies movies={movies} onDeleteMovie={deleteMovie}/>
      </main>
      <Footer />
    </div>
  );

}

export default App;
