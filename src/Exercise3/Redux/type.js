export const ActionAddPays=(newPays)=>(
    {
        type:'addPays',
        payload:{newPays}
    }
)

export const ActionAddCity=(newCity,idPays)=>(
    {
        type:"addCity",
        payload:{newCity,idPays}
    }
)