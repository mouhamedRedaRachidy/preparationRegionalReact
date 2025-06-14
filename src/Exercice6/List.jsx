import { Link } from "react-router-dom"

export const List = ({emps,deleteEmp}) => {
    const hadnelDelete=(e,id)=>{
        e.preventDefault()
        console.log(id)
        deleteEmp(id)
    }
  return (
    <div>
        <h1>List</h1>
        <table>
                       <thead>
                <tr>
                    <th>#MAT</th>
                    <th>Nom</th>
                    <th>Post</th>
                </tr>
            </thead>
            <tbody>
                {emps.map((emp,key)=>{
                    return (
                        <tr key={key}>
                             <td>{emp.mat}</td>
                            <td>{emp.nom}</td>
                           
                            <td>{emp.post}</td>
                            <td>
                                <Link to={`/modifier/${emp.mat}`}>Update</Link>
                                <button onClick={(e)=>hadnelDelete(e,emp.mat)}>Delete</button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
  )
}