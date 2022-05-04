import './App.css';
import { useState, useEffect } from 'react';
import AuthPage from '../AuthPage/AuthPage';
import HomePage from '../HomePage/HomePage';
import CityShowPage from '../CityShowPage/CityShowPage';
import { getUser } from '../../utilities/users-service';
import NewDestPage from '../NewDestPage/NewDestPage';
import Layout from '../../components/Layout/Layout';
import { Routes, Route } from 'react-router-dom';
import EditPage from '../EditPage/EditPage';



function App() {
    const [user, setUser] = useState(getUser());
    const [destinations, setDestinations] = useState([]);
    const [refresh, setRefresh] = useState(false);
    useEffect(() => {
        (async () => {
            try {
                const data = await fetch('https://damon-travel-japan-guide.herokuapp.com/articles');
                const article = await data.json();
                console.log("Article is " + article)
                setDestinations(article)
                console.log("The destination is " + destinations)
                // console.log(user)
            } catch (e) {
                console.log(e)
            }
        })()
    }, [refresh])

    return (
        <main className="App">
            {user ?
                <>
                    <Routes>
                        <Route path="/" element={<Layout user={user} setUser={setUser} destinations={destinations} />} >
                            <Route index element={<HomePage />} />
                            <Route path="/destinations/new" element={<NewDestPage refresh={refresh} setRefresh={setRefresh} />} />
                            <Route path="/destinations/:id/edit" element={<EditPage refresh={refresh} setRefresh={setRefresh} />} />
                            <Route path="/destinations/:id" element={<CityShowPage refresh={refresh} setRefresh={setRefresh} user={user} />} />
                        </Route>

                    </Routes>
                </>

                :
                <AuthPage setUser={setUser} />
            }
        </main>
    );
}

export default App;
