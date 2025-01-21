import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

const Hebergement = () => {
    const [input, setInput] = useState({})
    const dispatch = useDispatch()
    const handelChange = (e) => {
        setInput(() => {
            const { name, value } = e.target
            return {
                [name]: value
            }
        })
    }
    const handelAddComment = (id) => {
        console.log(id);

        dispatch({ type: 'addComente', payload: { input, id } })
    }
    const hebergSelctor = useSelector(state => state.db)
    return (
        <div className="container">
            {hebergSelctor.map(v => {
                return (
                    <div className="card">
                        <h3>{v.Nom_Hotel}</h3>
                        <div>
                            <button className="btn btn-success btn-sm">{v.Like}</button>
                            <button className="btn btn-danger btn-sm mx-2">{v.Dislike}</button>
                        </div>
                        <div>
                            {v.Commentaires.map(c => {
                                return <p>{c}</p>
                            })}
                        </div>
                        <form action="">
                            <textarea name="comment" onChange={handelChange} id=""></textarea>
                        </form>
                        <button className="btn btn-primary" onClick={() => handelAddComment(v.IdHotel)} >Add Comente</button>
                        <hr />
                    </div>

                )
            })}
        </div>
    )
}
export default Hebergement