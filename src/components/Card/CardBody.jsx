export default function CardBody({ content }) {

    const { title, director, genre, release_year, abstract, avg_vote } = content


    return (
        <div>
            <h3>{title}</h3>
            <p>director: {director}</p>
            <p>genre: {genre}</p>
            <p>year: {release_year}</p>
            <p>{abstract}</p>
            <p>vote: {avg_vote}</p>
        </div>
    )
}