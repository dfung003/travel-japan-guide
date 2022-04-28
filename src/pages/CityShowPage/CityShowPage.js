import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function CityShowPage({ destinations, refresh, setRefresh }) {
    const { id } = useParams();
    const [city, setCity] = useState({})
    const navigate = useNavigate();

    const findById = (input) => {
        console.log(input)
        const found = input.find((element) => {
            console.log(id)
            return (element.name === id) // if element name matches city name in URL
        })
        return found
    }
    useEffect(() => {
        (async () => {
            try {
                // setCity(data.data);
                const foundCity = findById(destinations); // passing every article we have in backend
                setCity(foundCity);
            } catch (e) {
                console.log(e)
            }
        })()
    }, [id])

    const handleDelete = async (id) => {
        setRefresh(!refresh);
        navigate("/");
        console.log(id)
        try {
            await fetch(`http://localhost:3001/articles/${id}`, {
                method: "DELETE"
            })
        } catch (e) {
            console.log(e)
        }
    }
    console.log(destinations)
    return (
        <main className="destination">
            <h1>{city.name}</h1>
            <h2>Description</h2>
            <p>{city.description}</p>
            <h2>Points of Interest</h2>
            <p>{city.pointsOfInterest}</p>
            <h2>Popular Food</h2>
            <p>{city.popularFood}</p>

            <div className="show-buttons">
                <button className="btn btn-danger" onClick={() => handleDelete(city._id)}>Delete Article</button>
            </div>
        </main>
    )
}