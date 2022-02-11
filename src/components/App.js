import '../css/App.css';
import Modal from './Modal';
import Header from './Header';
import Searchbox from './Searchbox';
import Movieform from './Movieform';
import Movies from './Movies';
import Footer from './Footer';

const App = () => {
  return (
    <div className='container'>
      <Modal />
      <Header />
      <Searchbox />
      <main>
        <Movieform />
        <Movies />
      </main>
      <Footer />
    </div>
  );
}

export default App;
