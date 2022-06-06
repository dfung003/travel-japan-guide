import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

export default function CityShowPage({ refresh, setRefresh, user }) {
    const { id } = useParams(); // grab id of an object (city) from URL, puts it into state variable
    const [city, setCity] = useState({})
    const [toggle, setToggle] = useState(false);
    const navigate = useNavigate();
    const content = useRef();
    let token = localStorage.getItem('token');
    useEffect(() => {
        (async () => {
            try {
                const foundCity = await fetch(`https://damon-travel-japan-guide.herokuapp.com/articles/${id}`)
                // get request to backend database, get back an object, assigned to foundCity
                const article = await foundCity.json()
                // variable set as the json-converted data
                setCity(article) // change state variable

            } catch (e) {
                console.log(e)
            }
        })()
    }, [id])

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(`https://damon-travel-japan-guide.herokuapp.com/articles/${id}/comments`, {
                method: "POST",
                content: content.current.value
            }, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
            setToggle(!toggle)
            navigate(`/destinations/${city._id}`)
        } catch (e) {
            console.log(e)
        }
    } 

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
            <form onSubmit={handleSubmit}>
                <p>Enter comment</p>
                <input type="text" ref={content}></input>
                <input type="submit" value="Add Comment" />
            </form>
            {
                city.comments ? 
                    <div>
                        {
                            city.comments.map((comment, idx) => {
                                return (
                                    <p>{ comment.content }</p>
                                )
                            })
                        }
                    </div>
                    :
                    ""
            }
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