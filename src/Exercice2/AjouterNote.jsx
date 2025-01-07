import { useEffect, useState } from "react"

const AjouterNote = ({setStagier,stagierShow,setEditChamp}) => {
  const [input,setInput]=useState({
    id:'',
    nom:'',
    filier:'',
    note:''
  })
  useEffect(()=>{
    setEditChamp(input)
  },[input])
  useEffect(()=>{
    setInput(
      {
        id:stagierShow.id || '',
        nom:stagierShow.nom || '',
        filier:stagierShow.filier || '',
        note:stagierShow.note || ''
      }
    )
  },[stagierShow])
  const handelChange=(e)=>{
    const {name,value,checked}=e.target
    setInput(prevInput=>{
      return{
        ...prevInput,
        [name]:checked?value:value
      }
    })
  }
  console.log('Stagier :',stagierShow);
  
  const filterForm=()=>{
    let isValid=true
    if(input.id===""){
      isValid=false
    }
    if(input.nom===""){
      isValid=false
    }
    if(input.filier===""){
      isValid=false
    }
    if(input.note===""){
      isValid=false
    }
    return isValid
  }

  const onAdd=(e)=>{
    e.preventDefault()
    const valid=filterForm()
    if(valid){
      setStagier(prev=>{
        return[
          ...prev,
          input
        ]
      })
    }else{
      alert('all champ reuired')
    }
  }

  return (
    <form>
      {JSON.stringify(stagierShow)}<br></br>
      <input type="text" value={input?.id} placeholder="id" onChange={handelChange} name="id" /><br />
      <input type="text" value={input?.nom}  placeholder="nom" onChange={handelChange} name="nom" /><br />
      <input type="radio" onChange={handelChange} name="filier" checked={input?.filier==='TDI'} value={'TDI'} />
      <input type="radio" onChange={handelChange} name="filier" checked={input?.filier==='TDD'} value={'TDD'} />
      <input type="radio" onChange={handelChange} name="filier" checked={input?.filier==='TDM'} value={'TDM'} /><br/>
      <input type="text" value={input?.note}  placeholder="note" onChange={handelChange} name="note" /><br />

      <button onClick={onAdd}>Add</button>
    </form>
  )
}
export default AjouterNote