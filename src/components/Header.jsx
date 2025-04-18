import { NavLink } from "react-router-dom"


export default function Header() {
    return (

        <>

            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarID"
                        aria-controls="navbarID" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarID">
                        <div className="navbar-nav">
                            <NavLink className="nav-link active" aria-current="page" to="/">HomePage</NavLink>
                            <NavLink className="nav-link active" aria-current="page" to="/PostList">PostList</NavLink>
                            <NavLink className="nav-link active" aria-current="page" to="/ChiSiamo">Chisiamo</NavLink>

                        </div>
                    </div>
                </div>
            </nav>



        </>
    )


}