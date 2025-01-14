import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"
import { BASE_URI } from "../../config";
import MovieInfo from "../../components/MovieInfo/MovieInfo";
import StarVote from "../../components/StarVote/Starvote";
import Reviews from "../../components/Reviews/Reviews";
import ReviewForm from "../../components/Reviewsform/ReviewForm";

export default function ShowPage() {

    const [movie, setMovie] = useState(null)

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
                    <section>
                        <MovieInfo content={movie} />
                    </section>

                    <section>
                        <StarVote vote={movie.avg_vote} />
                    </section>

                    <section>
                        {movie.reviews && movie.reviews.length ?
                            <Reviews content={movie.reviews} /> :
                            <div>Nessuna recensione</div>
                        }
                    </section>
                    <section>
                        <ReviewForm id={id} onSuccess={() => fetchById(id)} />

                    </section>

                </div> :
                <div>nessun film</div>
            }
        </>
    )
}