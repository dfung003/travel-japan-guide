// import './App.css';
import { useState, useEffect } from 'react';
// import AuthPage from '../AuthPage/AuthPage';
import HomePage from '../HomePage/HomePage';
import CityShowPage from '../CityShowPage/CityShowPage';
import NewDestPage from '../NewDestPage/NewDestPage';
import NavBar from '../../components/NavBar/NavBar';
import { Routes, Route } from 'react-router-dom';



function App() {
    const [user, setUser] = useState(null);
    const [dest, setDest] = useState([]);
    const [city, setCity] = useState("");
    useEffect(() => {
        (async () => {
            try {
                const data = await fetch('http://localhost:3000/articles');
                const article = await data.json();
                setDest(article)
            } catch (e) {
                console.log(e)
            }
        })()
    }, [])

    return (
        <main className="App">
            {/* <NavBar dest={dest} /> */}
            {
                <Routes>
                    <Route path="/" element={<NavBar setCity={setCity} dest={dest} />} >
                        {/* <Route path="/destinations" element={<DestinationPage />} /> */}
                        <Route path="/destinations/new" element={<NewDestPage />} />
                        <Route path="/destinations/:id" element={<CityShowPage />} />
                    </Route>

                </Routes>

                // <AuthPage setUser={setUser} />
            }
        </main>
    );
}

export default App;
