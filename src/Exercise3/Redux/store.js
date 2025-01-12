import { createStore } from "redux";
import reducer from "./Reducer";


const saveToLocalStorage = (state) => {
    try {
        const saveToLocalStorage = JSON.stringify(state)
        localStorage.setItem('pays', saveToLocalStorage)
    }catch(e){
        console.log('Sauvgared pas les donne dans localStorage'+e);     
    }
}


const loadFromLocalStorage = () => {
    try{
        const getState=localStorage.getItem('pays')
        if(getState===null) return undefined;
        return JSON.parse(getState)
    }catch(e){
        console.log('Probleme dans Importe state')
    }
};


const preisetdState=loadFromLocalStorage()
const store=createStore(reducer,preisetdState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

store.subscribe(()=>{
    saveToLocalStorage(store.getState())
})
//localStorage.clear()

export default store;