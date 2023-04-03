import React, {useEffect, useState} from "react"
import "./personDetail.css"
import { useParams } from "react-router-dom"

const PersonDetail = () => {
    const [currentPerson, setPerson] = useState()
    const [currentImage, setImage] = useState()
    const { id } = useParams()

    useEffect(() => {
        getData()
        window.scrollTo(0,0)
    }, [])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/person/${id}?api_key=5058efa201f4ad4fba59a8deb39502b3`)
        .then(res => res.json())
        .then(data => console.log(data))
    }

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/person/${id}/images?api_key=5058efa201f4ad4fba59a8deb39502b3`)
        .then(res => res.json())
        .then(data => setImage(data.profiles[1].file_path))
    }, [])

    return (
        <div className="person">
            {/* <p>{currentPerson.name}</p> */}
            <img src={`https://image.tmdb.org/t/p/original${currentImage}`} width={300} />
            {/* <img src={currentPerson.profile_path}/> */}
           
        </div>
    )
}

export default PersonDetail