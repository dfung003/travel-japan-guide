import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function CityShowPage({ refresh, setRefresh, user }) {
    const { id } = useParams();
    const [city, setCity] = useState({})
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            try {
                const foundCity = await fetch(`https://damon-travel-japan-guide.herokuapp.com/${id}`)
                const article = await foundCity.json()
                setCity(article)

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
            await fetch(`https://damon-travel-japan-guide.herokuapp.com/articles/${id}`, {
                method: "DELETE"
            })
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <main className="destination">
            <h1>{city.name}</h1>
            <p className="white-space">{city.description}</p>
            <h2>Points of Interest</h2>
            <img className="show-images" id="image-one" src={city.imageOne} />
            <p className="white-space">{city.pointsOfInterest}</p>
            <h2>Popular Food</h2>
            <img className="show-images" id="image-two" src={city.imageTwo} />
            <p className="white-space">{city.popularFood}</p>
            {user.admin ?
                <div className="show-buttons">
                    <button className="btn btn-danger" onClick={() => {
                        console.log('button is working')
                        navigate(`/destinations/${id}/edit`)
                    }}>Edit Article</button>
                    <button className="btn btn-danger" onClick={() => handleDelete(city._id)}>Delete Article</button>
                </div> : null
            }

        </main>
    )
}