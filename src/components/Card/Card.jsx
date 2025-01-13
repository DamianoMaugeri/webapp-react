import CardBody from "./CardBody";

export default function Card({ content }) {

    const { image } = content

    return (
        <>
            <div>
                <figure>
                    <img src={image} alt="" />
                </figure>
                <CardBody content={content} />
            </div>
        </>
    )
} 