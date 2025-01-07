import { useState } from "react"
import AjouterNote from "./AjouterNote"

const ListNote = () => {
  const [stagier, setStagier] = useState([])
  const [stagierShow,setStagierShow]=useState({})
  const [update,setUpdate]=useState(false)
  const onDelete=(id)=>{
    const stagierFilter=stagier.filter(s=>s.id!==id)
    setStagier(stagierFilter)

  }

  const onEdit=(id)=>{
    const editStagier=stagier.find(s=>s.id===id)
    setStagierShow(editStagier)
    setUpdate(prev=>!prev)
  }
const onSave=(id)=>{
  console.log(id);
  
}
  const handelDisplay = () => {
    return stagier.map(s => {
      return (
        <tr>
          <td>{s.id}</td>
          <td>{s.nom}</td>
          <td>{s.note<10?<span style={{color:'red'}}>{s.note}</span>:<span style={{color:'green'}}>{s.note}</span>}</td>
          <td>{s.filier}</td>
          <td>
            <button onClick={()=>onDelete(s.id)}>supprimer</button>
            <button onClick={update?()=>onSave(s.id):()=>onEdit(s.id)}>{update?'save':'modifier'}</button>
          </td>
        </tr>
      )
    })
  }

  return (
    <>

      <AjouterNote setStagier={setStagier} onSave={onSave}    stagierShow={stagierShow}   />
      <table>

        <thead>
          <tr>
            <th>Id</th>
            <th>nom</th>
            <th>note</th>
            <th>filier</th>
            <th>gestion</th>
          </tr>
        </thead>
        <tbody>
          {handelDisplay()}
        </tbody>
      </table>
    </>


  )

}
export default ListNote