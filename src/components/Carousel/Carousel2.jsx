import React, { useEffect, useState } from "react";
import './Carousel.css';
// import "./../../pages/home/home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';
// import { Link } from "react-router-dom";
// import MovieList from "../../components/movieList/movieList";

export const Carousel2 = () => {

    const [ popularMovies, setPopularMovies ] = useState([])

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=5058efa201f4ad4fba59a8deb39502b3")
        .then(res => res.json())
        .then(data => setPopularMovies(data.results))
    }, [])

    return (
        <>
            <div className="container">
            <div className="carousel">
                {/* <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={1}
                    infiniteLoop={true}
                    showStatus={false}
                > */}
                    {
                       popularMovies.map(movie => (
                        <a className="carousel__face" style={{textDecoration:"none",color:"white"}} href={`/movie/${movie.id}`} >
                            {/* <div >
                                <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
                            </div>
                            <div className="posterImage__overlay">
                                <div className="posterImage__title">{movie ? movie.original_title: ""}</div> */}
                                <div className="posterImage__runtime">
                                    {movie ? movie.release_date : ""}
                                    <span className="posterImage__rating">
                                        {movie ? movie.vote_average :""}
                                        <i className="fas fa-star" />{" "}
                                    </span>
                                </div>
                                {/* <div className="posterImage__description">{movie ? movie.overview : ""}</div>
                                </div> */}
                        </a>
                    ))
                    //   <div className="container">
                    //   <div className="carousel">
                    //     <div className="carousel__face"><span>This is something</span></div>
                    //     <div className="carousel__face"><span>Very special</span></div>
                    //     <div className="carousel__face"><span>Special is the key</span></div>
                    //     <div className="carousel__face"><span>For you</span></div>
                    //     <div className="carousel__face"><span>Just give it</span></div>
                    //     <div className="carousel__face"><span>A try</span></div>
                    //     <div className="carousel__face"><span>And see</span></div>
                    //     <div className="carousel__face"><span>How IT Works</span></div>
                    //     <div className="carousel__face"><span>Woow</span></div>
                    //   </div>
                    // </div>
                  }
                {/* </Carousel> */}
                {/* <MovieList /> */}
                  </div>
            </div>
        </>
    )
}

// export default Home
// export const Carousel2 = () => {
//   return (
//     <div className="container">
//   <div className="carousel">
//     <div className="carousel__face"><span>This is something</span></div>
//     <div className="carousel__face"><span>Very special</span></div>
//     <div className="carousel__face"><span>Special is the key</span></div>
//     <div className="carousel__face"><span>For you</span></div>
//     <div className="carousel__face"><span>Just give it</span></div>
//     <div className="carousel__face"><span>A try</span></div>
//     <div className="carousel__face"><span>And see</span></div>
//     <div className="carousel__face"><span>How IT Works</span></div>
//     <div className="carousel__face"><span>Woow</span></div>
//   </div>
// </div>
//   )
// }
