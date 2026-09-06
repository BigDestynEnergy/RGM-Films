import { LuSearch } from "react-icons/lu";
import { useMovies } from "../context/Fetch"
import "../styles/header.css"
import { useNavigate } from "react-router-dom";

export default function Header(){
    const {setQuery, query} = useMovies();
    const nav = useNavigate();

    const redirect = () => nav("/");
    return(
        <header>
            <h1 onClick={redirect}>RMG Films</h1>

            <div className="query">
                <input type="text" placeholder="Find movies here..." value={query}
                onChange={(e)=>setQuery(e.target.value)} />

                <div className="icon">
                    <LuSearch/>
                </div>
            </div>
        </header>
    )
}