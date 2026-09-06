import { useLocation, useNavigate } from "react-router-dom"
import "../styles/null.css"

export default function NotFound(){

    const location = useLocation();
    const nav = useNavigate();

    return(
        <div className="not-found-overlay">
            <p>The page <span style={{color:"#f11c1c"}}>"{location.pathname.replace("/", "")}"</span> doesn't exist.</p>
            <span style={{cursor:"pointer"}} onClick={()=>nav("/")}>Back home</span>
        </div>
    )
}