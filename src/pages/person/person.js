import React, { useEffect, useState } from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import "./person.css";

const Person = () => {

    const [ popularPerson, setPopularPerson ] = useState([]);

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/person/popular?api_key=5058efa201f4ad4fba59a8deb39502b3")
        .then(res => res.json())
        .then(data => setPopularPerson(data.results))
        
    }, [])

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
                        popularPerson.map(person => (
                            <Link style={{textDecoration:"none",color:"white"}} to={`/person/${person.id}`} >
                                <div className="personImage">
                                    <img src={`https://image.tmdb.org/t/p/original${person && person.profile_path}`} alt="img" />
                                </div>
                                <div className="posterImage__overlay"> 
                                    <div className="personImage__name">{person ? person.name: ""}</div> 
                                    <div className="posterImage__runtime">
                                        {person ? person.popularity : ""}
                                        <span className="posterImage__rating">
                                            {person ? person.vote_average :""}
                                            <i className="fas fa-star" />{" "}
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </Carousel>
                <MovieList person={currentPerson} currentPage={currentPage}/>
                <button onClick={prevPage}>prev</button>
                <button onClick={nextPage}>next</button>
                <Pagination totalPages={totalPages} paginate={paginate}
                />
            </div>
        </>
    )
}

export default Person;