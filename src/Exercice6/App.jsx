import { useState } from "react"
import { BrowserRouter } from "react-router-dom"
import { Nav } from "./Nav"

export const App=()=>{
    const [emp,setEmp]=useState([])

    const ajouterEmp=(data)=>{
        setEmp(prevState=>{
            return[
                ...prevState,
                data
            ]
        })
    }
    const deleteEmp=(id)=>{
        const empFilter=emp.filter(e=>e.mat!==id)
        setEmp(empFilter)
    }

    const updateEmp=(newData)=>{
        console.log(newData)
        setEmp(prevState=>prevState.map(p=>p.mat==newData.mat?newData:p))
                         

    }

    return (
        <BrowserRouter>
            <Nav emps={emp} ajouterEmp={ajouterEmp} deleteEmp={deleteEmp} updateEmp={updateEmp}/>
        </BrowserRouter>
    )
}