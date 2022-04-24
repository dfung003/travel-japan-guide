// import './App.css';
import { useState } from 'react';
// import AuthPage from '../AuthPage/AuthPage';
import HomePage from '../HomePage/HomePage';
import DestinationPage from '../DestinationPage/DestinationPage';
import NewDestPage from '../NewDestPage/NewDestPage';
// import NavBar from '../../components/NavBar';
import { Routes, Route } from 'react-router-dom';



function App() {
    const [user, setUser] = useState(null);

    return (
        <main className="App">
            {/* <NavBar /> */}
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
