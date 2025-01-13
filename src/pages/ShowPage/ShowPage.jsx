import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"
import { BASE_URI } from "../../config";
import MovieInfo from "../../components/MovieInfo/MovieInfo";
import StarVote from "../../components/StarVote/Starvote";

export default function ShowPage() {

    const [movie, setMovie] = useState({})

    const { id } = useParams()



    function fetchById(id) {

        axios.get(`${BASE_URI}/api/movies/${id}`)
            .then(res => setMovie(res.data))
            .catch(err => console.error(err))

    }

    useEffect(() => {
        fetchById(id)
    }, [id]);


    return (
        <>
            {movie ?
                <div>
                    <MovieInfo content={movie} />
                    <StarVote vote={movie.avg_vote} />

                </div> :
                <div>nessun film</div>
            }
        </>
    )
}