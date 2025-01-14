import StarVote from "../StarVote/Starvote"

export default function ReviwCard({ content }) {

    const { name, vote, text, created_at, updated_at } = content



    return (
        <div>
            <h4>{name}</h4>
            <div> <StarVote vote={vote} /></div>
            <p>{text}</p>
        </div>
    )
}