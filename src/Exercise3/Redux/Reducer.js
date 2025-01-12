const initialState = {
    city:[{name:'rrrrrrrr'}],
    pays: [
    ],


    lastPaysId: 0
}



const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'addPays':
            const lastId = state.lastPaysId + 1
            const paysWithId = { id: lastId, ...action.payload.newPays }
            return { ...state, pays: [...state.pays, paysWithId], lastPaysId: lastId }

           /* case 'addCity':
                return state*/



        case 'deletePaye':

            const foundPaye = state.pays.find(p => p.id === action.payload.id)
            //console.log(`found : ${JSON.stringify(foundPaye)}`)
            if (foundPaye) {
                return { ...state, pays: state.pays.filter(p => p.id !== action.payload.id) }
            }
            return state

        default: return state
    }
}

export default reducer