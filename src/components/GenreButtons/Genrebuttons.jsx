import { useContext } from "react"
import GlobalContex from "../../contex/GlobalContex"

export default function Genrebuttons() {

    function filtraTagUnici(array) {
        return array.filter((el, i) => array.indexOf(el) === i);
    }
    const { movies } = useContext(GlobalContex)

    const genreTags = movies.map(movie => movie.genre)

    const filteredTags = filtraTagUnici(genreTags)




    return (
        <>
            {filteredTags.length ?
                filteredTags.map((tag, i) => (
                    <div key={i}>
                        <button>
                            {tag}
                        </button>

                    </div>
                ))
                :
                <div>Nessun genere tra cui scegliere</div>
            }
        </>

    )
}