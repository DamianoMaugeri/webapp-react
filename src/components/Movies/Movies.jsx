import { useContext } from "react";
import GlobalContex from "../../contex/GlobalContex";
import { Link } from "react-router-dom";
import Card from "../Card/Card";

export default function Movies() {
    const { movies } = useContext(GlobalContex)

    return (
        <>
            {movies.length ?
                movies.map(movie => (
                    <div key={movie.id}>
                        <Link to={`/movies/${movie.id}`}>
                            <Card content={movie} />
                        </Link>
                    </div>
                ))
                :
                <div>Nessun film disponibile</div>
            }
        </>
    )
}