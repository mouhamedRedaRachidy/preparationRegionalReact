const initialState = {
    lastPaysId: 0,
    lastCityId: 0,
    pays: [],
    city: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'addPays':
            const lastId = state.lastPaysId + 1
            const paysWithId = { id: lastId, ...action.payload.newPays }
            return { ...state, pays: [...state.pays, paysWithId], lastPaysId: lastId }


        case 'deletePaye':

            const foundPaye = state.pays.find(p => p.id === action.payload.id)
            //console.log(`found : ${JSON.stringify(foundPaye)}`)
            if (foundPaye) {
                return { ...state, pays: state.pays.filter(p => p.id !== action.payload.id) }
            }
            return state


        case 'addCity':
            console.log(action.payload.newCity)
            const { idPays} = action.payload.newCity
            const findPays = state.pays.find(p => p.id == idPays)
            //console.log('pays :', findPays)
            if (!findPays) {
                console.log('Not found pays')
            }
            const lastCityId = state.lastCityId + 1
            const cityWithId = {
                ...action.payload.newCity,
                id: lastCityId
            }
            return { ...state, city: [...state.city, cityWithId], lastCityId: lastCityId }

        case 'deleteCity':
            console.log('payload: ', action.payload)
            const cityFound = state.city.find(c => c.id === action.payload.id)
            if (!cityFound) {
                console.log('City not found')
            } else {
                return { ...state, city: state.city.filter(c => c.id !== action.payload.id) }
            }
            break

        case 'editCity':
            console.log(action.payload.id)
            return { ...state, city: state.city.map(c => c.id == action.payload.id ? { ...c, ...action.payload.updateCity } : c) }


        default: return state
    }
}

export default reducer