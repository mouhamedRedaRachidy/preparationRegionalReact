export const ActionAddPays=(newPays)=>(
    {
        type:'addPays',
        payload:{newPays}
    }
)

export const ActionAddCity=(newCity)=>(
    {
        type:"addCity",
        payload:{newCity}
    }
)
export const ActionDeletePays=(id)=>(
    {
        type:'deletePaye',
        payload:{id}
    }
)
export const ActionDeleteCity=(id)=>(
    {
        type:'deleteCity',
        payload:{id}
    }
)
export const ActionEditCity=(updateCity,id)=>(
    {
        type:'editCity',
        payload:{updateCity,id}
    }
)