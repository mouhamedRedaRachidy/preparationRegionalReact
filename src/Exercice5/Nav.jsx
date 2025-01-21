import { Link, Route, Routes } from "react-router-dom"
import Hebergement from "./Hebergement"

const Nav = () => {
  return (
    <div>
        <ul>
            <li>
                <Link to={'/hebergemrnt'}>Hebergement</Link>
                <Link to={'/voiture'}>Voiture</Link>
            </li>
        </ul>
        <Routes>
            <Route path="/hebergemrnt" element={<Hebergement/>}/>
            <Route path="/voiture" element={<h1>Voiture</h1>}/>
        </Routes>
    </div>
  )
}
export default Nav