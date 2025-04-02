import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export default function PostList() {
    const [postLists, setPostLists] = useState([])



    useEffect(() => {
        fetch('http://localhost:3003/api/v1/posts')
            .then(res => res.json())
            .then(data => {
                console.log(data);

                setPostLists(data)
            })
    }, [])



    return (

        <>
            <main>

                <div className="container p-4">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3">
                        {postLists.map(post => (
                            <div className="col p-3" key={post.id}>
                                <div className="card d-flex flex-row">
                                    <Link to={`/postLists/${post.id}`}>
                                        <img className="img-container d-flex" src={`http://localhost:3003${post.image}`} alt={post.name} />

                                    </Link>
                                    <div className="card-body">
                                        <h3>{post.title}</h3>
                                        <p className='fs-6'> {post.content}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

            </main>




        </>
    )


}