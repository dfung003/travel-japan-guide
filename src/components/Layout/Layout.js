import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { logout } from '../../utilities/users-service';

export default function Layout({ destinations, user, setUser, refresh, setRefresh }) {
    const handleLogout = () => {
        logout()
        setUser(null)
    }
    const toggle = () => {
        setRefresh(!refresh)
    }
    return (
        <div className="layout-website">
            <nav className='navbar bg-light'>
                <div className="navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav navbar-expand-lg mr-auto" >
                        {/* <h3>Japan Travel Guide</h3> */}
                        <img className="logo" src="/assets/japantravelguide_logo.png" />
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                <div className="navbar">Home</div>
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" aria-expanded="false" data-toggle="dropdown" role="button" to="#">
                                Destinations
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                {
                                    destinations.map((city) => {
                                        return (
                                            <>

                                                <Link onClick={toggle} className='dropdown-item' to={`/destinations/${city._id}`}>{city.name}</Link>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </li>
                        {
                            user.admin ?
                                <li className="nav-item">
                                    <Link className="nav-link" to="/destinations/new">
                                        <div>Create Article</div>
                                    </Link>
                                </li> : null
                        }

                        <li className="login">Hello, {user.name}</li>
                        <li className="logout-btn" onClick={handleLogout}>(logout?)</li>
                    </ul>
                </div>
                <main className="outlet">
                    <Outlet />

                </main>

            </nav>
            <footer className="text-center">
                <div className="content">
                    <p className="footer">Created By Damon Fung</p>
                    <span style={{ fontSize: "150%" }}>
                        <a className="footer-btn" href="https://github.com/dfung003" target="_blank"><i class="fab fa-github-square"></i></a>
                        <a className="footer-btn" href="https://www.linkedin.com/in/damonfung27/" target="_blank"><i class="fab fa-linkedin"></i></a>
                    </span>
                </div>
            </footer>
        </div>
    )
}