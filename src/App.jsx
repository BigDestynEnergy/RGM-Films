import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Application from './routes/Application'
import { PopupProvider } from './context/PopupProvider'
import { LoadingProvider } from './context/LoadingContext'
import { MoviesProvider } from './context/Fetch'

export default function App(){
  return(
    <div className="app">
      <PopupProvider>
        <BrowserRouter>
        <LoadingProvider>
          <MoviesProvider>
      <Application/>
      </MoviesProvider>
      </LoadingProvider>
      </BrowserRouter>
      </PopupProvider>

    </div>
  )
}