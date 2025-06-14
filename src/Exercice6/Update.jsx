import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

export const Update = ({ updateEmp, emps }) => {
    const params = useParams()
    const { id } = params

    const emp = emps.find(e => e.mat == id)
    const [formData, setFormData] = useState({
        mat: '',
        nom: '',
        post: ''
    })

    useEffect(() => {
        if (emp) {
            setFormData({
                mat: emp.mat,
                nom: emp.nom,
                post: emp.post,
            })
        }
    }, [emp])

    const navigate = useNavigate()

    const handelChange = (e) => {
        const { name, value } = e.target
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const onUpdate = (e) => {
        e.preventDefault()
        updateEmp(formData)
        navigate('/')
    }

    return (
        <div>
            <h1>Update Emp</h1>
            <form onSubmit={onUpdate}>
                <input type="text" name="mat" value={formData.mat} onChange={handelChange} />
                <input type="text" name="nom" value={formData.nom} onChange={handelChange} />
                <input type="text" name="post" value={formData.post} onChange={handelChange} />
                <button type="submit">Edit</button>
            </form>
        </div>
    )
}
