import ReviwCard from "./RewiewCard"

export default function Reviews({ content }) {
    return (
        <ul>
            {content.map((review, i) => {
                return <li key={i}>
                    <ReviwCard content={review} />
                </li>
            })}
        </ul>
    )
}