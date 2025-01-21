import { useState } from "react"

const AjouterVoiture = (props) => {
    const [input,setInput]=useState({
        id:'',
        make:''
    })
    const handelChange=(e)=>{
        setInput((prev)=>{
            const {name,value}=e.target
            return{
                ...prev,
                [name]:value
            }
        })
        //console.log(input)
    }
    const handelClick=(e)=>{
        e.preventDefault()
        props.ajouter(input)
        setInput({
            id:'',
            make:''
        })
    }
  return (
    <form className="container" action="">
        <label htmlFor="">Id</label><br />
        <input type="text" value={input.id} name="id" onChange={handelChange} className="form-control" /><br />
        <label htmlFor="">Make</label><br />
        <input type="text" value={input.make}  name="make" onChange={handelChange} className="form-control" /><br />
        <button className="btn btn-primary" onClick={handelClick}>Save</button><br /><br /><br />
    </form>
  )
}
export default AjouterVoiture