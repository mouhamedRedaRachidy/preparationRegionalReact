import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const Ajouter=({ajouterEmp})=>{
    const [formData,setFormData]=useState({})
    const navigate=useNavigate()
    const handelChange=(e)=>{
        const {name,value}=e.target
        setFormData(prevState=>{
            return{
                ...prevState,
                [name]:value
            }
        })
    }

    const onAjouter=(e)=>{
        e.preventDefault()
        ajouterEmp(formData)
        navigate('/')
    }

    return (
        <div>
            <h1>Ajouter Emp</h1>
            <form action="">
                <input type="text" name="mat" onChange={handelChange} />
                <input type="text" name="nom" onChange={handelChange} />
                <input type="text" name="post" onChange={handelChange} />
            </form>
            <button onClick={onAjouter}>Ajouter</button>
        </div>
    )
}