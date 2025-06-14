import { Link, Route, Routes } from "react-router-dom"
import { List } from "./List"
import { Ajouter } from "./Ajouter"
import { Update } from "./Update"

export const Nav=({ajouterEmp,updateEmp,deleteEmp,emps})=>{

    return (
        <div>
                    <nav>
                <Link to={'/'}>List</Link>
                <Link to={'/ajouter'}>Ajouter</Link>
            </nav>

                  <Routes>
            <Route path='/' element={<List emps={emps} deleteEmp={deleteEmp}/>}/>
            <Route path='/ajouter' element={<Ajouter ajouterEmp={ajouterEmp}/>} />
            <Route path='/modifier/:id' element={<Update emps={emps} updateEmp={updateEmp}/>}  />
        </Routes>
        </div>
    )
}