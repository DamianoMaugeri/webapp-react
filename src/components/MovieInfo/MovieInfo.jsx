export default function MovieInfo({ content }) {

    const { title, director, genre, release_year, abstract, image } = content

    return (
        <div>
            <figure>
                <img src={image} alt="" />
            </figure>
            <div>
                <h2>{title}</h2>
                <p>director: {director}</p>
                <p>genre: {genre}</p>
                <p>year: {release_year}</p>
                <p>{abstract}</p>

            </div>


        </div>
    )
}