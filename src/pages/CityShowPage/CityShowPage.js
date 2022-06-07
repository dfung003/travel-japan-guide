import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import axios from "axios";

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
                const foundCity = await axios.get(`/api/articles/${id}`, {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                })
                // get request to backend database, get back an object, assigned to foundCity
                setCity(foundCity.data.query) // change state variable
                console.log("City is ", city)
            } catch (e) {
                console.log(e)
            }
        })()
    }, [refresh])

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(`/api/articles/${id}/comments`, {
                content: content.current.value,
                userId: user._id
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
                                    <>
                                        <div>
                                            <p>{comment.userId.name}</p>
                                        </div>
                                        <div>
                                            <p>{comment.content}</p>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                    :
                    <p>No comments</p>
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