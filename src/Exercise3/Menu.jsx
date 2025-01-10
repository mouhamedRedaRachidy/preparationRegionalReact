import { Link, Route, Routes } from "react-router-dom"
import AddPays from "./AddPays"
import ListPays from "./ListPays"
import { useState } from "react";

const Menu = () => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleNavbar = () => {
        setIsCollapsed(prevState => !prevState);
    };
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><h3 className="text-primary">Gestion Pays</h3></a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-center w-100">
                            <li className="nav-item mx-3">
                                <Link to={'/'} className="nav-link active">Liste Pays</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/add/pays'} className="nav-link">Ajouter Paye</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>



            <Routes>
                <Route index element={<ListPays />} />
                <Route path='/add/pays' element={<AddPays />} />
            </Routes>
        </>
    )
}
export default Menu