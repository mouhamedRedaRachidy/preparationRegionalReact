import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { createStore } from "redux"
import Nav from "./Nav"
import Hebergement from "./Hebergement"

const App = () => {
    const initState = {
        "db": [{
            "IdHotel": "Farah Inn",
            "Nom_Hotel": "Farah Inn",
            "Description": "Situé à Ifrane dans la région moyen atlas...",
            "Ville": "Ifrane",
            "Images": "farah1.jpg",
            "Commentaires": ["trop loin du centre-ville", "l'accueil top",],
            "Like": 90,
            "Dislike": 5
        },
        {
            "IdHotel": "hotel",
            "Nom_Hotel": "Hotrl Inn",
            "Description": "Situé à Ifrane dans la région moyen atlas...",
            "Ville": "Ifrane",
            "Images": "farah1.jpg",
            "Commentaires": ["trop loin du centre-ville", "l'accueil top",],
            "Like": 90,
            "Dislike": 5
        }]
    }
    const reducer = (state = initState, action) => {
        switch (action.type) {
            case 'addComente':
                //alert('coent')
                const comment = state.db.find(c => c.IdHotel === action.payload.id);
                if (comment) {
                    const {comment}=action.payload.input
                    //console.log(comment);
                    
                    return {
                        ...state,
                        db:state.db.map(c=>c.IdHotel===action.payload.id?{...c,Commentaires:[...c.Commentaires,comment]}:c)
                    };
                }
          break;

            case 'addLike':
                return {}

            default: return state
        }
    }
    const store = createStore(reducer)
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Nav></Nav>
            </BrowserRouter>
          
        </Provider>
    )
}
export default App