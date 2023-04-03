import React, {useEffect, useState} from "react"
import "./movieList.css"
import { useParams } from "react-router-dom"
import Cards from "../card/card"

const MovieList = ({movies, currentPage}) => {
    
    const [movieList, setMovieList] = useState([])
    const {id} = useParams()

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        getData(currentPage)
    }, [id, currentPage])

    const getData = (currentPage) => {
        fetch(`https://api.themoviedb.org/3/movie/popular?page=${currentPage}&api_key=5058efa201f4ad4fba59a8deb39502b3`)
        .then(res => res.json())
        .then(data => setMovieList(data.results))
    }

    return (
        <div className="movie__list">
            <h2 className="list__title">POPULAR</h2>
            <div className="list__cards">
                {
                    movieList.map(movie => (
                        <Cards movie={movie} currentPage={currentPage} />
                    ))
                }
            </div>
        </div>
    )
}

export default MovieList