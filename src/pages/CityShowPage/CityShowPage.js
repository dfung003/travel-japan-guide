import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function CityShowPage({ destinations }) {
    const { id } = useParams();
    const [city, setCity] = useState({})

    const findById = (input) => {
        console.log(input)
        const found = input.find((element) => {
            console.log(id)
            return (element.name === id) // if element name matches city name in URL
        })
        return found
    }
    useEffect(() => {
        try {
            // setCity(data.data);
            const foundCity = findById(destinations); // passing every article we have in backend
            setCity(foundCity);
        } catch (e) {
            console.log(e)
        }
    }, [id])

    return (
        <main className="destination">
            <h1>{city.name}</h1>
            <p>{city.population}</p>
            <p>{city.description}</p>
        </main>
    )
}