import { NavLink } from "react-router-dom";


export default function Nav() {
    return (
        <nav>
            <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/about-us'>About us</NavLink></li>
                <li><NavLink to='/contacts'>Contacts</NavLink></li>

            </ul>
        </nav>
    )
}