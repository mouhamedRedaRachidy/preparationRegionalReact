const initialState = {
    pays: [
    ],

    lastPaysId:0
}



const reducer = (state=initialState,action)=>{
    switch(action.type){
        case 'addPays':
            const lastId=state.lastPaysId+1
            return {...state,pays:[...state.pays,action.payload.newPays],lastPaysId:lastId}

        case 'addCity':
            const selectPays=state.pays.find(p=>p.id===action.idPays)
            if(selectPays){
                state.pays.map(p=>p.id===action.payload.idPays?{...state,cities:[...p,action.payload.newCity]}:p)
            }
            break

        default : return state
    }
}

export default reducer