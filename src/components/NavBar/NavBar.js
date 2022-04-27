import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';



export default function NavBar({ destinations, setCity }) {
    return (
        <nav className='navbar'>
            <div className="navbar-collapse">
                <ul className="navbar-nav mr-auto" >
                    <li className="nav-item">
                        <Link className="nav-link" to="/">
                            <div>Home</div>
                        </Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" id="navbarDropdown" aria-expanded="false" data-toggle="dropdown" role="button" to="#">
                            <div>Destinations</div>
                        </Link>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            {
                                destinations.map((city) => {
                                    return (
                                        <>

                                            <Link className='dropdown-item' to={`/destinations/${city.name}`}>{city.name}</Link>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/destinations/new">
                            <div>Create Article</div>
                        </Link>
                    </li>
                </ul>
            </div>
            <main className="outlet">
                <Outlet />
            </main>




        </nav>

    )
}