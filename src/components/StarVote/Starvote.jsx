import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';


export default function StarVote({ vote }) {

    const formattedVote = Math.floor(vote)

    const StarVote = []

    for (let index = 0; index < 5; index++) {

        if (index < formattedVote) {
            StarVote.push(<FontAwesomeIcon icon={faStar} key={index} />)
        } else {
            StarVote.push(<FontAwesomeIcon icon={faStarRegular} key={index} />)
        }

    }

    return StarVote
}