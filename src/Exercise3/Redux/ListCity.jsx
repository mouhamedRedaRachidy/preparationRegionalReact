import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { ActionDeleteCity } from "./type"

const ListCity = () => {
    const citySelector = useSelector(state => state.city)
    console.log('citys : ',citySelector);
    const dispatch=useDispatch()
    const params = useParams()
    const { idCity } = params


    const filterPays = citySelector.filter(c => c.idPays === idCity)
    //console.log(filterPays)
    const displayCity = () => {
        if (filterPays.length === 0) {
            return <h2>No City de cette pays</h2>
        } else {
            return filterPays.map((c, key) => {
                const displayTa9afa=c.ta9afa?.map(t=>` ${t} ,  `);
                console.log(displayTa9afa);
                
                return <tr>
                    <td>{key + 1}</td>
                    <td>{c.city}</td>
                    <td>{c.provinne}</td>
                    <td>{c.popultion}</td>
                    <td>{c.capital}</td>
                    <td>[{displayTa9afa || ''}]</td>
                    <td>
                        <Link to={`/edit/city/${c.id}`}><button  className="btn btn-primary">Edit</button></Link>
                        <button onClick={()=>handelDelete(c.id)} className="btn btn-danger mx-2">Delete</button>
                    </td>
                </tr>
            })
        }
    }

    const handelDelete=(id)=>{
        if(window.confirm('Are you sure delete')){
            dispatch(ActionDeleteCity(id))
        }
    }

    
    return (
        <div className="container">
            <h2>List City</h2>
            <table className="table my-4" >
                <thead>
                    <tr>
                        <th style={{ width: '20rem' }}>Id</th>
                        <th style={{ width: '20rem' }}>City</th>
                        <th style={{ width: '20rem' }}>provinne</th>
                        <th style={{ width: '20rem' }}>Popultion</th>
                        <th style={{ width: '20rem' }}>Capital</th>
                        <th style={{ width: '20rem' }}>Ta9afa</th>
                        <th style={{ width: '20rem' }}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {displayCity()}
                </tbody>

            </table>
        </div>
    )
}
export default ListCity