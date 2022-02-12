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
    setMovies([...movies, newMovie]);
    setModal({
      msg: `Movie 《${newMovie.title}》 was added successfully!`,
      visible: true
    })
  }

  //use props to pass down this function
  const deleteMovie = (id) => {
    const newMovies = movies.filter((item)=>{
      return item.id !== id;
    });
    setMovies(newMovies);
    setModal({
      msg: `The movie with ID ${id} was deleted successfully!`,
      visible: true
    })
  }

  const hideModal = ()=>{
    setModal({
      msg: '',
      visible: false
    })
  }

  const showForm = ()=>{
    setformVisible(true);
  }

  const hideForm = ()=>{
    setformVisible(false);
  }

  //useEffect will fire off when the component finish loading
  useEffect(()=>{

    const fakeDB = [
      {id: 1, title: "WandaVision", description: "This is showing on Disney"},
      {id: 2, title: "Avengers", description: "This is showing on Netflix"},
      {id: 3, title: "End Game", description: "This is showing on HBO"},
      {id: 4, title: "Spider man", description: "This is showing on Prime video"},
      {id: 5, title: "Iron man", description: "This is showing on Youtube"}
    ]

    setMovies(fakeDB);

  }, []); //the [] means calling the function once
  
  return (
    <div className='container'>
      <Modal onHide={hideModal} modalState={modal}/>
      <Header onShowForm={showForm} onHideForm={hideForm}/>
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
