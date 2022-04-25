// import './App.css';
import { useState, useEffect } from 'react';
// import AuthPage from '../AuthPage/AuthPage';
import HomePage from '../HomePage/HomePage';
import DestinationPage from '../DestinationPage/DestinationPage';
import NewDestPage from '../NewDestPage/NewDestPage';
import NavBar from '../../components/NavBar/NavBar';
import { Routes, Route } from 'react-router-dom';



function App() {
    const [user, setUser] = useState(null);
    const [dest, setDest] = useState([]);
    useEffect(() => {
        (async () => {
            try {
                const data = await fetch('http://localhost:3001/articles');
                const article = await data.json();
                setDest(article)
            } catch (e) {
                console.log(e)
            }
        })()
    }, [])

    return (
        <main className="App">
            <NavBar dest={dest} />
            {
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/destinations" element={<DestinationPage />} />
                    <Route path="/destinations/new" element={<NewDestPage />} />
                </Routes>

                // <AuthPage setUser={setUser} />
            }
        </main>
    );
}

export default App;
