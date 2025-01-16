import { useSelector } from "react-redux"
import Card from "./Components/Card"

const ListPays = () => {
    const paysSelector = useSelector(state =>state.pays)
    const displayPays = () => {
        if (paysSelector?.length === 0) {
            return <h2>No pays Now</h2>
        }
        else {
            return paysSelector?.map((paye, key) => {
                return <Card
                    {...paye}
                    key={key}
                />
            })
        }
    }
    return (
        <div className="container">
            <div className="row">
                {displayPays()}
            </div>
        </div>
    )
}
export default ListPays