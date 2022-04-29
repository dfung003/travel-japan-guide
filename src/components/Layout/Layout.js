import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';



export default function Layout({ destinations }) {
    return (
        <div className="layout-website">
            <nav className='navbar bg-light'>
                <div className="navbar-collapse">
                    <ul className="navbar-nav mr-auto d-flex" >
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                <div className="navbar">Home</div>
                            </Link>
                        </li>
                        <li className="nav-item dropdown d-flex w-75">
                            <Link className="nav-link dropdown-toggle" id="navbarDropdown" aria-expanded="false" data-toggle="dropdown" role="button" to="#">
                                <div>Destinations</div>
                            </Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                {
                                    destinations.map((city) => {
                                        return (
                                            <>

                                                <Link className='dropdown-item' to={`/destinations/${city._id}`}>{city.name}</Link>
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
            <footer class="text-center">
                <div class="content">
                    <p class="footer">Created By Damon Fung</p>
                    <span style={{ fontSize: "150%" }}>
                        <a class="footer-btn" href="https://github.com/dfung003" target="_blank"><i class="fab fa-github-square"></i></a>
                        <a class="footer-btn" href="https://www.linkedin.com/in/damonfung27/" target="_blank"><i class="fab fa-linkedin"></i></a>
                    </span>
                </div>
            </footer>
        </div>
    )
}