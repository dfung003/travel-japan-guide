import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
const BASE_URL = 'https://damon-travel-japan-guide.herokuapp.com'

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
                const foundCity = await axios.get(`${BASE_URL}/api/articles/${id}`, {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                })
                // get request to backend database, get back an object, assigned to foundCity
                setCity(foundCity.data.query) // change state variable
                // console.log("City is ", city)
            } catch (e) {
                console.log(e)
            }
        })()
    }, [refresh, toggle])

    // const comments = [...city.comments];

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(`${BASE_URL}/api/articles/${id}/comments`, {
                content: content.current.value,
                userId: user._id
            }, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
            setToggle(!toggle)
            content.current.value = ""
            navigate(`/destinations/${city._id}`)
        } catch (e) {
            console.log(e)
        }
    }

    const handleDelete = async (id) => {

        console.log(id)
        try {
            await fetch(`/api/articles/${id}`, {
                method: "DELETE"
            })
            navigate("/");
            setRefresh(!refresh);

        } catch (e) {
            console.log(e)
        }
    }
    console.log(city)
    const comments = city.comments ? [...city.comments] : null
    console.log(comments)
    return (
        <main className="destination">
            <h1>{city.name}</h1>
            <p className="white-space">{city.description}</p>
            <div>
                <div>
                    <h2>Points of Interest</h2>
                    <img className="show-images" id="image-one" src={city.imageOne} />
                    <p className="white-space">{city.pointsOfInterest}</p>
                </div>
                <div>
                    <h2>Popular Food</h2>
                    <img className="show-images" id="image-two" src={city.imageTwo} />
                    <p className="white-space">{city.popularFood}</p>
                </div>
            </div>
            <div>
                <form className="comment-form" onSubmit={handleSubmit}>
                    <textarea rows="6" cols="10" placeholder="Enter comment here" ref={content}></textarea>
                    <input type="submit" value="Add Comment" />
                </form>
                {
                    city.comments ?
                        <div className="comment-container">
                            {
                                comments.reverse().map((comment, idx) => {
                                    return (
                                        <div className="comment-thread">
                                            <div style={{ borderRight: "solid black", paddingRight: "80px" }}>
                                                <p>{comment.userId.name}</p>
                                            </div>
                                            <div>
                                                <p>{comment.content}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        :
                        <p>No comments</p>
                }
            </div>
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