import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export default function Product() {
    const [PostList, setPostList] = useState(null)

    const navigate = useNavigate()

    const { id } = useParams()
    console.log(id);


    useEffect(() => {
        fetch(`http://localhost:3003/api/v1/posts/${id}`)
            .then(res => res.json())
            .then(data => {

                setPostList(data)

            })

    }, [])
    return (
        <>
            <main>

                <section id="product_details" className="mt-5">
                    <div className="container">
                        <div className="row g-4">
                            <div className="col-12 col-md-5">
                                <img className="img-fluid" src={PostList.image} alt={PostList.title} />
                            </div>
                            <div className="col-12 col-md-7">
                                <div className="back">
                                    <button className="back" onClick={() => navigate(-1)}>
                                        <i className="bi bi-arrow-left"></i>
                                    </button>
                                </div>
                                <h1>Product: {PostList.title}</h1>
                                <p>{PostList.description}</p>
                                <div className="price fw-bold fs-2">${PostList.price}</div>
                            </div>
                        </div>
                    </div>
                </section>




            </main>



        </>


    )

}
