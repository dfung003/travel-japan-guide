import { useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // lets you go from one page to another (redirect)


export default function NewDestPage({ city, setCity }) {
    const name = useRef(null); // keeps track of what is in back end
    const description = useRef(null);
    const pointsOfInterest = useRef(null);
    const image = useRef(null);
    const popularFood = useRef(null);

    const navigate = useNavigate();
    const handleSubmit = async (evt) => {
        evt.preventDefault();
        try {
            const response = await fetch("http://localhost:3001/articles", {
                method: "POST", // switch GET to POST request
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: name.current.value, // create schema within body with key name, give ref from line 6
                    description: description.current.value,
                    pointsOfInterest: pointsOfInterest.current.value,
                    popularFood: popularFood.current.value
                })

            })
            const data = await response.json();
            if (response.status === 200) {
                setCity(!city) // changes boolean from true to false, rerenders fetch request when creating new schema and refreshes page
                navigate("/") // goes back to Home Page
            }
        } catch (evt) {
            console.log(evt)
        }
    }
    return (
        <main className="new-dest-page">
            <h1>NewDestPage</h1>
            <form onSubmit={handleSubmit}>
                Name: <input name="name" type="text" ref={name} required />

                Description: <input name="description" type="text" ref={description} required />

                Points of Interest: <input name="pointsOfInterest" type="text" ref={pointsOfInterest} required />

                Popular Food: <input name="popularFood" type="text" ref={popularFood} required />

                <input type="submit" value="Submit Form" />

            </form>
        </main>
    )

}