import { BrowserRouter } from "react-router"
import "./App.css"
import Application from "./Routes/Application"
import { LoadingProvider } from "./contexts/LoadingProv"
import Provider from "./contexts/provider"
import { PopupProvider } from "./contexts/PopupProvider"

export default function App(){
  return(
    <div className="app">

      <LoadingProvider>
      <BrowserRouter>
      <PopupProvider>
      <Provider>
        
      <Application/>
    
      </Provider>
      </PopupProvider>
      </BrowserRouter>
      </LoadingProvider>
    </div>
  )
}