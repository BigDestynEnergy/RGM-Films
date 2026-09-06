import { createContext, useContext, useState } from "react";
import Popup from "../components/popup";

const Context = createContext();

export const PopupProvider = ({children})=>{
    const [note, setNote] = useState({
        isOpen:false,
        message:""
    })

    const notify = (message, timeout = 3000) => {
        setNote({isOpen:true, message});

          setTimeout(() => {
        setNote((prev) => ({...prev, isOpen:false}))
    }, timeout);
    };

    return(
        <Context.Provider value={{notify}}>
            {children}
            <Popup 
            isOpen={note.isOpen}
            message={note.message}/>
        </Context.Provider>
    )
  
}

export const usePopup = ()=>useContext(Context);