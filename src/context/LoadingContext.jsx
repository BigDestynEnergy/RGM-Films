import { createContext, useContext, useState } from "react";
import Loading from "../components/Loading";

const Context = createContext()

export const LoadingProvider = ({children})=>{
    const [isOpen, setIsOpen] = useState(false);

    const startLoading = (state)=>{
        setIsOpen(state)
    }

    return(
        <Context.Provider value={{startLoading}}>
            {children}
            <Loading isOpen={isOpen}/>
        </Context.Provider>
    )
}


export const useLoadingProvider = ()=>useContext(Context);