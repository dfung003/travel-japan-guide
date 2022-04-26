import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';

export default function CityShowPage() {
    const params = useParams()
    const [objects, setObjects] = useState([])

    const findById = (input) => {
        const found = input.find((element) => {
            return (element.name === params.id) // if element name matches city name in URL
        })
        setObjects(found) // take singular object and put it here
    }
    useEffect(() => {
        (async () => {
            try {
                const data = await axios.get('http://localhost:3000/articles');
                setObjects(data.data);
                findById(objects); // passing every article we have in backend
                console.log(objects)
            } catch (e) {
                console.log(e)
            }
        })()
    }, [])
    return (
        <main className="destination">
            <h1>Show Page</h1>
        </main>
    )
}