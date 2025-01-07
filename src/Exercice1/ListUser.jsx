import axios from "axios"
import { useEffect, useState } from "react"
import { User } from "./User"
import AjouterNote from "../Exercice2/AjouterNote"

const ListUser = () => {
    const [users, setUsers] = useState([])

    const styleListCard={
        width:'100%',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        gap:'1rem'
    }
    useEffect(() => {
        const getUsers = async () => {
            const user = await axios.get("https://jsonplaceholder.typicode.com/users")
            setUsers(user.data)
            console.log(users);
        }

        getUsers()

    }, [])

    return (
        <div>
            <AjouterNote setUsers={setUsers} />
            <h1>List user {users?.length}</h1>
            <div style={styleListCard}>
                {users?.map((u, key) => {
                    return <User name={u.name} adresse={u.adresse} key={key} id={u.id} />
                })}
            </div>
        </div>
    )
}
export default ListUser