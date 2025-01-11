import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

const DetailPaye = () => {
    const params=useParams()
    const paysSelector=useSelector(state=>state.pays)
    const foundPaye=paysSelector.find(p=>p.id === +params.id)
    console.log(foundPaye)
  return (
    <>
        <div className="container">
            <h1>DETAIL</h1>
            <img src={foundPaye.image} alt="" />
            <h3 className="text-primary">{foundPaye.name}</h3>
        </div>
    </>
  )
}
export default DetailPaye