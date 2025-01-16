import { Link, Route, Routes, useLocation } from "react-router-dom"
import AddPays from "./AddPays"
import ListPays from "./ListPays"
import { useState } from "react";
import DetailPaye from "./Components/DetailPaye";
import AddCity from "./AddCity";
import ListCity from "./Redux/ListCity";
import ListAnneePendent from "./ListAnneePendent";
import ListPayePendent from "./ListPayePendent";

const Menu = () => {
    const location = useLocation()
    const [link, setLink] = useState('')
    const handelClickLink = (link) => {
        setLink(link)
    }
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
                                <Link to={'/'} onClick={() => handelClickLink('list')} className={`nav-link ${location.pathname === "/" ? 'active text-info' : ''}`}>Liste Pays</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/add/pays'} onClick={() => handelClickLink('add')} className={`nav-link ${location.pathname === "/add/pays" ? 'active text-info' : ''}`}>Ajouter Paye</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/add/city'} onClick={() => handelClickLink('add')} className={`nav-link ${location.pathname === "/add/city" ? 'active text-info' : ''}`}>Ajouter City</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/list/annee'} onClick={() => handelClickLink('add')} className={`nav-link ${location.pathname === "/list/annee" ? 'active text-info' : ''}`}>Annee Pendent</Link>
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
                <Route path="/list/city/:idCity" element={<ListCity />} />
                <Route path='/add/pays' element={<AddPays />} />
                <Route path='/showPay/:id' element={<DetailPaye />} />
                <Route path="/add/city" element={<AddCity />} />
                <Route path="/edit/city/:id" element={<AddCity />} />
                <Route path="/list/annee" element={<ListAnneePendent />} />
                <Route path="/list/annee/:annee" element={<ListPayePendent />} />
            </Routes>
        </>
    )
}
export default Menu