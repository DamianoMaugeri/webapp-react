import { text } from "@fortawesome/fontawesome-svg-core"
import axios from "axios"
import { useState } from "react"
import { BASE_URI } from "../../config"

const initialFormData = {
    vote: 1,
    name: '',
    text: ''
}

export default function ReviewForm({ id, onSuccess = () => { } }) {

    const [formData, setFormData] = useState(initialFormData)


    function handleForm(e) {
        const { value, name } = e.target

        setFormData(
            {
                ...formData,
                [name]: value
            }
        )
    }

    function storeRew(e) {
        e.preventDefault()

        const data = {
            text: formData.text,
            name: formData.name,
            vote: formData.vote
        }

        axios.post(`${BASE_URI}/api/movies/${id}/reviews`, data)
            .then(res => {
                setFormData(initialFormData);
                onSuccess(id)
            }).catch(err => {
                console.log(err)
            })
    }



    return (
        <form onSubmit={storeRew} >
            <p>
                <label htmlFor="name">NOME *</label>
                <input type="text" placeholder="inserisci il nome" name="name" id="name" value={formData.name} onChange={handleForm} />

            </p>
            <p>
                <label htmlFor="text">RECENSIONE</label>
                <textarea name="text" id="text" placeholder="scrivi una recensione" value={formData.text} onChange={handleForm}> </textarea>

            </p>
            <p>
                <label htmlFor="vote">VOTO *</label>
                <select name="vote" id="vote" value={formData.vote} onChange={handleForm} >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>

                </select>

            </p>
            <div>
                <button>invia

                </button>
            </div>




        </form>
    )
}