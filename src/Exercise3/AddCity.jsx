import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ActionAddCity, ActionEditCity } from "./Redux/type"
import { useNavigate, useParams } from "react-router-dom"

const AddCity = () => {
    const navigate = useNavigate()
    const [input, setInput] = useState({
        city: '',
        provinne: '',
        popultion: '',
        idPays: '',
        capital: '',
        ta9afa: [] 
      });
    const paysSelector = useSelector(state => state.pays)
    const citySelector = useSelector(state => state.city)
    const dispatch = useDispatch()
    const params = useParams()
    const { id } = params

    const findCity = citySelector.find(c => c.id === Number(id))
    //console.log(findCity)
    useEffect(() => {
        setInput({
            city: findCity?.city || '',
            provinne: findCity?.provinne || '',
            popultion: findCity?.popultion || '',
            idPays: findCity?.idPays || '',
            capital: findCity?.capital || '',
            ta9afa: findCity?.ta9afa || []
        })
    }, [id, params])

    console.log(input, ' inputs');
    const displayPaye = () => {
        return paysSelector?.map(p => {
            return <option value={p.id}>{p.name}</option>
        })
    }

    const handelChangeInput = (e) => {
        const { name, value, checked, type } = e.target

        setInput((prevState) => {
            const currentVal = prevState[name] || [];

            return {
                ...prevState,
                [name]: type === 'checkbox' ?
                    checked ?
                        [...currentVal, value]
                        : currentVal.filter(item => item !== value)
                    : value

            };
        });


    }

    const handelAddCity = (e) => {
        e.preventDefault()
        dispatch(ActionAddCity(input))
        navigate(`/list/city/${input.idPays}`)
        /*console.log(input.idPays)
        console.log(input?.city)*/
        //console.log(input);
    }

    const handelEditCity = (e) => {
        e.preventDefault()
        dispatch(ActionEditCity(input, id))
        console.log('edit mode')
    }
    return (
        <div className="container">
            {JSON.stringify(input)}
            <form className="my-4 w-50">
                <select name="idPays" value={input.idPays} onChange={handelChangeInput} className="form-select">
                    <option value="-1">Select Paye</option>
                    {displayPaye()}
                </select>
                <div className="input-groupe my-2">
                    <label htmlFor="" className="">City</label>
                    <input type="text" value={input.city} onChange={handelChangeInput} name="city" className="form-control" />
                </div>
                <div className="input-groupe my-2">
                    <label htmlFor="" className="">Provinne</label>
                    <input type="text" value={input.provinne} onChange={handelChangeInput} name="provinne" className="form-control" />
                </div>
                <div className="input-groupe my-2">
                    <label htmlFor="" className="">Popultion</label>
                    <input type="text" value={input.popultion} onChange={handelChangeInput} name="popultion" className="form-control" />
                </div>
                <div className="input-groupe d-flex my-2">
                    <label htmlFor="" className="me-4">Capital : </label>
                    <div className="d-flex">
                        Yes<input type="radio" checked={input.capital === 'Yes'} onChange={handelChangeInput} name="capital" value={'Yes'} className="from-radio mx-2" />
                        No<input type="radio" checked={input.capital === 'No'} onChange={handelChangeInput} name="capital" value={'No'} className="from-radio mx-2" />
                    </div>
                </div>
                <div className="input-groupe d-flex my-2">
                    <label htmlFor="" className="me-4">Ta9afa  : </label>
                    <div className="d-flex">
                        Koskos<input type="checkbox" checked={input.ta9afa.includes('koskos')} onChange={handelChangeInput} name="ta9afa" value={'koskos'} className="from-radio mx-2" />
                        Pizza hut<input type="checkbox" checked={input.ta9afa.includes('pizza')} onChange={handelChangeInput} name="ta9afa" value={'pizza'} className="from-radio mx-2" />
                    </div>
                </div>
                <button onClick={id ? handelEditCity : handelAddCity} className="btn btn-success my-2">{id ? 'Edit' : 'ajouter'}</button>
            </form>
        </div>
    )
}
export default AddCity