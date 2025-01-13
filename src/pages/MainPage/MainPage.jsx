import Genrebuttons from "../../components/GenreButtons/Genrebuttons";
import Movies from "../../components/Movies/Movies";

export default function MainPage() {
    return (
        <>
            <section>
                <Genrebuttons />
            </section>
            <section>
                <Movies />
            </section>
        </>
    )
}