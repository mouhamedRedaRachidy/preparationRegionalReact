import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import Card from "./Components/Card"

const ListPayePendent = () => {
    const params = useParams()
    const { annee } = params
    const paysSelector = useSelector(({ pays }) => pays)

    const filterAnnee = () => {
        return paysSelector.filter(p => p.indepYear == annee)
    }
    const displayPays = () => {
        return filterAnnee().map((p, key) => {
            return (
                <Card {...p} key={key} />
            )
        })
    }
    return (
        <div className="container">
            <div className="row">
                {displayPays()}
            </div>
        </div>
    )
}
export default ListPayePendent