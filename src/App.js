import React, { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';

const App = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: 'Inception',
      description: 'A thief who enters the dreams of others to steal secrets',
      posterURL: 'https://via.placeholder.com/150',
      rating: 8.8
    },
    {
      id: 2,
      title: 'Interstellar',
      description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
      posterURL: 'https://via.placeholder.com/150',
      rating: 8.6
    }
  ]);

  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');

  const handleTitleChange = (e) => {
    setTitleFilter(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRatingFilter(e.target.value);
  };

  const filteredMovies = movies.filter(movie => {
    return (
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= parseInt(ratingFilter)
    );
  });

  const addMovie = () => {
    const newMovie = {
      id: movies.length + 1,
      title: 'New Movie',
      description: 'Description of the new movie',
      posterURL: 'https://via.placeholder.com/150',
      rating: 0
    };

    setMovies(prevMovies => [...prevMovies, newMovie]);
  };

  return (
    <div className="App">
      <h1>Movie Library</h1>
      <Filter handleTitleChange={handleTitleChange} handleRatingChange={handleRatingChange} />
      <button onClick={addMovie}>Add Movie</button>
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;

