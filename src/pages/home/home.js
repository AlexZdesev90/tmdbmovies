import React, { useCallback, useEffect, useState } from 'react';
import './home.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import MovieList from '../../components/movieList/movieList';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import debounce from 'lodash.debounce';
import { Pagination, Grid } from '@mui/material';
import { DropDown} from '../../components/dropDownMenu/DropDown';

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState();
  const [searchValue, setSearchValue] = useState('');
  const [filteredValue, setFilteredValue] = useState('');
  const [filter, setFilter] = useState('popular');


  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${filter}?page=${currentPage}&api_key=5058efa201f4ad4fba59a8deb39502b3`)
      .then((res) => res.json())
      .then((data) => {
        setPopularMovies(data.results);
        setTotalPages(data.total_pages);
      });
  }, [filter, `${searchValue === '' ? currentPage : ''}`]);
    
    const updateSearchValue = useCallback(
      debounce((value) => {
        setSearchValue(value);
        setFilteredValue(value);
      }, 500),
      [],
      );
      
  const onChangeSearchValue = (searchValue) => {
    setSearchValue(searchValue);
    updateSearchValue(searchValue);
  };

  const setNewTotalPages = (num) => {
    setTotalPages(num);
  }

  const onClickChanged = (value) => {
    console.log("change type")
    setFilter(value)
    setSearchValue('');
    setFilteredValue('')
  }

  return (
    <>
      <div className="poster">
        <Carousel
          showThumbs={false}
          autoPlay
          transitionTime={1}
          infiniteLoop={true}
          showStatus={false}
          showArrows={true}
          showIndicators={true}
        >
          {popularMovies?.map((movie) => (
            <Link key={movie.id} style={{ textDecoration: 'none', color: 'white' }} to={`/movie/${movie.id}`}>
              <div className="posterImage">
                <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt="img" />
              </div>
              <div className="posterImage__overlay">
                <div className="posterImage__title">{movie ? movie.original_title : ''}</div>
              </div>
            </Link>
          ))}
        </Carousel>
        <div className='handliers'>
          <SearchBar searchValue={searchValue} onChangeSearchValue={onChangeSearchValue} />
          <DropDown filter={filter} onClickChanged={onClickChanged}/>
        </div>
        <MovieList
          searchValue={filteredValue}
          currentPage={currentPage}
          setNewTotalPages={(num) => setNewTotalPages(num)}
          popularMovies={popularMovies}
        />
        <Grid container justifyContent="center" bgColor="primary" sx={{ p: '2rem' }}>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={(_, num) => setCurrentPage(num)}
            variant="outlined"
            color="secondary"
          />
        </Grid>
      </div>
    </>
  );
};

export default Home;
