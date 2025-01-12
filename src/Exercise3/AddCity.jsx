import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ActionAddCity } from "./Redux/type"

const AddCity = () => {
    const [input, setInput] = useState({})
    const paysSelector = useSelector(state => state.pays)
    const dispatch = useDispatch()

    const displayPaye = () => {
        return paysSelector?.map(p => {
            return <option value={p.id}>{p.name}</option>
        })
    }

    const handelChangeInput = (e) => {
        const { name, value } = e.target
        setInput(
            (prevState) => {
                return {
                    ...prevState,
                    [name]: value
                }
            }
        )
    }

    const handelAddCity = (e) => {
        e.preventDefault()
        dispatch(ActionAddCity(input?.idPays, input?.city))
    }

    return (
        <div className="container">
            <form className="my-4 w-50">
                <select name="idPays" onChange={handelChangeInput} className="form-select">
                    <option value="-1">Select Paye</option>
                    {displayPaye()}
                </select>
                <div className="input-groupe my-2">
                    <label htmlFor="" className="">City</label>
                    <input type="text" onChange={handelChangeInput} name="city" className="form-control" />
                </div>
                <button onClick={handelAddCity} className="btn btn-success my-2">Ajouter City</button>
            </form>
        </div>
    )
}
export default AddCity