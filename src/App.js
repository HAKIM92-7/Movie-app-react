import React from 'react';
import logo from './logo.svg';
import './App.css';
import MovieList from './list_of_movies_component/MovieList';
import Modal from 'react-modal';
import Rater from  './Rating/Rater';
Modal.setAppElement('#root');
function App() {
  return (
    <>
    <MovieList />

      
    </>
  );
}

export default App;
