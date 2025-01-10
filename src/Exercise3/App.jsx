import { BrowserRouter, Outlet } from "react-router-dom"
import Menu from "./Menu"
import { Provider } from "react-redux"
import store from "./Redux/store"

const App = () => {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Menu />
        </BrowserRouter>
        <Outlet />
      </Provider>
    </>
  )
}
export default App