import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function EditPage({ refresh, setRefresh }) {
    const [city, setCity] = useState({});
    const { id } = useParams();
    const name = useRef(null);
    const description = useRef(null);
    const pointsOfInterest = useRef(null);
    const imageOne = useRef(null);
    const imageTwo = useRef(null);
    const popularFood = useRef(null);

    const navigate = useNavigate();
    useEffect(() => {
        (async () => {
            try {
                const foundCity = await fetch(`/api/articles/${id}`)
                const article = await foundCity.json()
                setCity(article.query)

            } catch (e) {
                console.log(e)
            }
        })()
    }, [])
    console.log(city)

    const handleSubmit = async (evt) => {
        evt.preventDefault(); // dont refresh page
        try {
            const response = await fetch(`https://damon-travel-japan-guide.herokuapp.com/api/articles/${id}`, {
                method: "PUT", // switch GET to PUTrequest
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: name.current.value, // create schema within body with key name, give ref from line 6
                    description: description.current.value,
                    pointsOfInterest: pointsOfInterest.current.value,
                    imageOne: imageOne.current.value,
                    popularFood: popularFood.current.value,
                    imageTwo: imageTwo.current.value
                })
            })
        } catch (err) {
            console.log(err)
        } finally { // will always run regardless if try works or errors out
            setRefresh(!refresh) // changes boolean from true to false, rerenders fetch request when creating new schema and refreshes page
            navigate("/") // goes back to Home Page
        }
    }

    return (
        <main className="edit-page">
            <h1>Edit {city.name} Page</h1>
            <form className="needs-validation" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="form-group col">
                        <label htmlFor="name">Name</label>
                        <input className="form-control" name="name" type="text" ref={name} defaultValue={city.name} required />
                    </div>

                    <div className="form-group col">
                        <label htmlFor="description">Description</label>
                        <textarea className="form-control" name="description" type="text" ref={description} cols="40" rows="5" defaultValue={city.description} required />
                    </div>

                    <div className="form-group col">
                        <label htmlFor="pointsOfInterest">Points of Interest</label>
                        <textarea className="form-control" name="pointsOfInterest" type="text" ref={pointsOfInterest} cols="50" rows="5" defaultValue={city.pointsOfInterest} required />
                    </div>

                    <div className="form-group col">
                        <label htmlFor="imageOne">First Image</label>
                        <input className="form-control" name="imageOne" type="text" ref={imageOne} defaultValue={city.imageOne} required />
                    </div>

                    <div className="form-group col">
                        <label htmlFor="popularFood">Popular Food</label>
                        <textarea className="form-control" name="popularFood" type="text" ref={popularFood} defaultValue={city.popularFood} cols="50" rows="5" required />
                    </div>

                    <div className="form-group col">
                        <label htmlFor="imageTwo">Second Image</label>
                        <input className="form-control" name="imageTwo" type="text" ref={imageTwo} defaultValue={city.imageTwo} required />
                    </div>
                </div>


                <input className="btn btn-danger" type="submit" value="Submit Form" />

            </form>
        </main>
    )
}