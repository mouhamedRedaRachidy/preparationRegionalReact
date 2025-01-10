import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ActionAddPays } from "./Redux/type"
import { useNavigate } from "react-router-dom"

const AddPays = () => {
    const [input, setInput] = useState({})
    const lastIdPayeSelector=useSelector(state=>state?.lastPaysId)
    const navigate=useNavigate()

    const dispatch = useDispatch()
    const handelChangeInput = (e) => {
        const {name,value} = e.target
        setInput(
            (prevInput) => {
                return {
                    ...prevInput,
                    [name]: value
                }
            }
        )
        
    }
    const handelClickAddPays = (e) => {
        e.preventDefault()
        dispatch(ActionAddPays(input))      
        navigate('/')
    }
    return (
        <>
            <div className="container p5">
                <form action="">
                    <div className="input-groupe">
                        <label htmlFor="">id</label>
                        <input type="text" value={lastIdPayeSelector+1}  readOnly name="id" className="form-control mt-2" />
                    </div>
                    <div className="input-groupe">
                        <label htmlFor="">Name</label>
                        <input type="text" name="name" onChange={handelChangeInput} className="form-control mt-2" />
                    </div>
                    <div className="input-groupe">
                        <label htmlFor="">contient</label>
                        <input type="text" name="contient" onChange={handelChangeInput} className="form-control mt-2" />
                    </div>
                    <div className="input-groupe">
                        <label htmlFor="">surface</label>
                        <input type="text" name="surface" onChange={handelChangeInput} className="form-control mt-2" />
                    </div>
                    <div className="input-groupe">
                        <label htmlFor="">image</label>
                        <input type="text" name="image" onChange={handelChangeInput} className="form-control mt-2" />
                    </div>
                    <div className="input-groupe">
                        <label htmlFor="">indepYear</label>
                        <input type="date" name="indepYear" onChange={handelChangeInput} className="form-control mt-2" />
                    </div>
                    <div className="input-groupe">
                        <label htmlFor="">population</label>
                        <input type="text" name="population" onChange={handelChangeInput} className="form-control mt-2" />
                    </div>

                </form>
                <button className="btn btn-success mt-2" onClick={handelClickAddPays}>Save</button>
            </div>
        </>
    )
}
export default AddPays