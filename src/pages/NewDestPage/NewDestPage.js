import { useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // lets you go from one page to another (redirect)


export default function NewDestPage({ refresh, setRefresh }) {
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
                setRefresh(!refresh) // changes boolean from true to false, rerenders fetch request when creating new schema and refreshes page
                navigate("/") // goes back to Home Page
            }
        } catch (evt) {
            console.log(evt)
        }
    }
    return (
        <main className="new-dest-page">
            <h1>Create a New Destination Page</h1>
            <form className="needs-validation" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="form-group col">
                        <label htmlFor="name">Name</label>
                        <input className="form-control" name="name" type="text" ref={name} required />
                    </div>

                    <div className="form-group col">
                        <label htmlFor="description">Description</label>
                        <textarea className="form-control" name="description" type="text" ref={description} cols="40" rows="5" required />
                    </div>

                    <div className="form-group col">
                        <label htmlFor="pointsOfInterest">Points of Interest</label>
                        <textarea className="form-control" name="pointsOfInterest" type="text" ref={pointsOfInterest} cols="50" rows="5" required />
                    </div>

                    <div className="form-group col">
                        <label htmlFor="popularFood">Popular Food</label>
                        <textarea className="form-control" name="popularFood" type="text" ref={popularFood} cols="50" rows="5" required />
                    </div>

                </div>


                <input className="btn btn-danger" type="submit" value="Submit Form" />

            </form>
        </main>
    )

}