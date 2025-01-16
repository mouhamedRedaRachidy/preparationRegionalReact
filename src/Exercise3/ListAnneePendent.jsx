import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const ListAnneePendent = () => {
    const paysSelector=useSelector(state=>state.pays)
    const anneePendent=paysSelector.map(a=>{
        return a.indepYear
    })
    const uniqTabelAnnePendent=[...new Set(anneePendent)]
    console.log('uniq : ',uniqTabelAnnePendent)
    const displayAnnePendent=()=>{
        return uniqTabelAnnePendent.map(a=>{
            return (
                <>
                <Link to={`/list/annee/${a}`}>{a}</Link>
                <br/>
                </>
            )
        })
    }
    return (
        <div className="container">
            {displayAnnePendent()}
        </div>
    )
}
export default ListAnneePendent