import { useEffect, useState } from "react"
import Voiture from "./Voiture"
import AjouterVoiture from "./AjouterVoiture"

const ListVoiture = () => {
    const [voitures, setVoitures] = useState([])

    useEffect(() => {
        fetch('https://www.freetestapi.com/api/v1/cars')
            .then(res => res.json())
            .then(res => setVoitures(res))
        //console.log(voitures);

    }, [])

    const handelDelete = (id) => {
        const filterList = voitures.filter(v => v.id !== id)
        setVoitures(filterList)
    }
    const handelEdit = (id) => {
        const findCar = voitures.find(v => v.id === id)
        if (findCar) {
            const edit = voitures.map(v => v.id === id ? { ...v, } : v)
            setVoitures(edit)
        }

    }
    const handelAjouter = (input) => {
        setVoitures(prevState=>[...prevState,input])
        console.log(voitures);
        
    }
    return (
        <div className="container">
            <AjouterVoiture ajouter={handelAjouter}/>
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Make</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {voitures.map(v => {
                        return <Voiture {...v} delete={handelDelete} edit={handelEdit} ajouter={handelAjouter} />
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default ListVoiture