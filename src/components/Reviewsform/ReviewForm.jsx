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

    const [isFormValid, setIsFormValid] = useState(true)


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
        setIsFormValid(true)

        const data = {
            text: formData.text.trim() || undefined,
            name: formData.name.trim(),
            vote: parseInt(formData.vote)
        }

        // validazione lato client
        if (!formData.name || !formData.vote || formData.vote < 1 || formData.vote > 5) {
            setIsFormValid(false)
            return
        }

        axios.post(`${BASE_URI}/api/movies/${id}/reviews`, data)
            .then(res => {
                setFormData(initialFormData);
                onSuccess(id)
            }).catch(err => {
                console.log(err)
                setIsFormValid(false)
            })
    }



    return (
        <form onSubmit={storeRew} >
            <p>
                <label htmlFor="name">NOME *</label>
                <input required type="text" placeholder="inserisci il nome" name="name" id="name" value={formData.name} onChange={handleForm} />

            </p>
            <p>
                <label htmlFor="text">RECENSIONE</label>
                <textarea name="text" id="text" placeholder="scrivi una recensione" value={formData.text} onChange={handleForm}> </textarea>

            </p>
            <p>
                <label htmlFor="vote">VOTO *</label>
                <select required name="vote" id="vote" value={formData.vote} onChange={handleForm} >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>

                </select>

            </p>
            <div>
                {isFormValid === false && <div>i dati non sono validi</div>}
                <button>invia</button>
            </div>




        </form>
    )
}