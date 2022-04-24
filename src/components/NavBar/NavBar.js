import { Link } from 'react-router-dom';



export default function NavBar() {
    return (
        <nav className='nav-bar'>
            <Link className="nav-link" to="/">
                <h1>Home</h1>
            </Link>
            <Link className="nav-link" to="/destinations">
                <div>Destinations</div>
            </Link>
            <Link className="nav-link" to="/destinations/new">
                <div>Create Article</div>
            </Link>
        </nav>
    )
}