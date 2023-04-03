import React, { useEffect, useState } from "react"
import "./home.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import MovieList from "../../components/movieList/movieList";
import { Pagination } from "../../components/Pagination";

const Home = () => {

    const [ popularMovies, setPopularMovies ] = useState([]);
    const [ currentPage, setCurrentPage] = useState(1);
    const [moviesPerPage] = useState(100)
    const [totalPages, setTotalPages] = useState(20);


    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?page=${currentPage}&api_key=5058efa201f4ad4fba59a8deb39502b3`)
        .then(res => res.json())
        .then(data => {
            setPopularMovies(data.results);
        })
    }, [currentPage])

    const lastMovieIndex = currentPage * moviesPerPage;
    const firstMovieIndex = lastMovieIndex - moviesPerPage
    const currentMovie = popularMovies.slice(firstMovieIndex, lastMovieIndex);

    const paginate = pageNumber => setCurrentPage(pageNumber);
    const nextPage = () => setCurrentPage(prev => prev + 1);
    const prevPage = () => setCurrentPage(prev => prev - 1);

    return (
        <>
            <div className="poster">
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={1}
                    infiniteLoop={true}
                    showStatus={false}
                    showArrows={false}
                >
                    {
                        popularMovies.map(movie => (
                            <Link style={{textDecoration:"none",color:"white"}} to={`/movie/${movie.id}`} >
                                <div className="posterImage">
                                    <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
                                </div>
                                <div className="posterImage__overlay">
                                    <div className="posterImage__title">{movie ? movie.original_title: ""}</div>
                                    <div className="posterImage__runtime">
                                        {movie ? movie.release_date : ""}
                                        <span className="posterImage__rating">
                                            {movie ? movie.vote_average :""}
                                            <i className="fas fa-star" />{" "}
                                        </span>
                                    </div>
                                    <div className="posterImage__description">{movie ? movie.overview : ""}</div>
                                </div>
                            </Link>
                        ))
                    }
                </Carousel>
                <MovieList movies={currentMovie} currentPage={currentPage}/>
                <button onClick={prevPage}>prev</button>
                <button onClick={nextPage}>next</button>
                <Pagination totalPages={totalPages} paginate={paginate}
                />
            </div>
        </>
    )
}

export default Home