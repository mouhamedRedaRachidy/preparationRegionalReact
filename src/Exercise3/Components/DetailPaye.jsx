import { useSelector } from "react-redux"
import { Link, useNavigate, useParams } from "react-router-dom"

const DetailPaye = () => {
  const navigate=useNavigate()
  const params = useParams()
  const paysSelector = useSelector(state => state.pays)
  const citySelector2 = useSelector(state => state.city);

  
  const foundPaye = paysSelector.find(p => p.id === +params.id)

  const handelClick=()=>{

    navigate('/')
  }

  return (
    <>
      <div className="container my-1">
      <button className="btn btn-danger my-2" onClick={handelClick}>Back</button>
        <div className="mx-auto w-100 ">

          <img src={foundPaye.image} alt="" />
          <h1 className="my-2">{foundPaye.name}</h1>
          <div><h5 className="d-inline text-warning">Contient</h5> : <h3 className="text-warring d-inline ">{foundPaye.contient}</h3></div>
          <div><h5 className="d-inline text-warning">Surface</h5> : <h3 className="text-warring d-inline">{foundPaye.surface}</h3></div>
          <div><h5 className="d-inline text-warning">Annee Independent</h5> : <h3 className="text-warring d-inline ">{foundPaye.indepYear}</h3></div>
          <div><h5 className="d-inline text-warning">Populaition</h5> : <h3 className="text-warring d-inline ">{foundPaye.population} Milion</h3></div>
          <Link to={`/list/city/${foundPaye.id}`} className="d-block my-2 text-success">Regarde cities de paye</Link>
          <button className="btn btn-primary">Ajouter Cities</button>
        </div>
      </div>
    </>
  )
}
export default DetailPaye