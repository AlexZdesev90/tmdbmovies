import React, { useEffect, useState } from 'react';
import './movieList.css';
// import { useParams } from "react-router-dom"
import Cards from '../card/card';

const MovieList = ({
  searchValue,
  currentPage,
  setNewTotalPages,
  popularMovies,
}) => {
  const [movieList, setMovieList] = useState();

  useEffect(() => {
    setMovieList(popularMovies);
  }, [popularMovies]);

  const queryString = (searchValue) => (searchValue !== '' ? `?query=${searchValue}&` : '?');

  useEffect(() => {
    getData(searchValue);
  }, [searchValue, currentPage]);

  const getData = (searchValue) => {
    fetch(
      `https://api.themoviedb.org/3/search/movie${queryString(
        searchValue,
      )}page=${currentPage}&api_key=5058efa201f4ad4fba59a8deb39502b3`,
    )
      .then((res) => res.json())
      .then((data) => {
        setMovieList(data.results);
        setNewTotalPages(data.total_pages);
      });
  };

  return (
    <div className="movie__list">
      <h2 className="list__title">MOVIES</h2>
      <div className="list__cards">
        {movieList?.map((movie) => (
          <Cards key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
