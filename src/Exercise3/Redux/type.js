export const ActionAddPays=(newPays)=>(
    {
        type:'addPays',
        payload:{newPays}
    }
)

export const ActionAddCity=(idPays,newCity)=>(
    {
        type:"addCity",
        payload:{newCity,idPays}
    }
)
export const ActionDeletePays=(id)=>(
    {
        type:'deletePaye',
        payload:{id}
    }
)