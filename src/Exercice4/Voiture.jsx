const Voiture = (props) => {
    const handelDelete=(id)=>{
        props.delete(id)
    }
    const handelEdit=(id)=>{
        props.edit(id)
    }
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.make}</td>
            <td>
                <button onClick={()=>handelDelete(props.id)} className="btn btn-danger">Delete</button>
                <button onClick={()=>handelEdit(props.id)} className="btn btn-primary mx-2">Edit</button>
            </td>
        </tr>
    )
}
export default Voiture