import { Link } from "react-router-dom"
import { Nav } from "../Nav/Nav"

export const Header = () => {
    return (
        <header>
            <Link to={"/"}>
                <h2>LOGO</h2>
            </Link>
            <Nav />
        </header>
    )
}