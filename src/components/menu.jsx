import { LuEye, LuGlobe, LuHeart, LuHouse } from "react-icons/lu"
import "../styles/menu.css"
import { NavLink, useNavigate } from "react-router-dom";

export default function Menu(){
    const tabs = [
        {name: "Home", icon: LuHouse, to: "/"},
        {name: "Watchlist", icon: LuEye, to: "/watchlist"}
    ];

    return(
        <nav>
            <div className="tabs">
                {tabs.map((item, index)=>(
                    <NavLink to={item.to}
                    key={index}
                    className={({isActive}) => isActive ? "active tab" : "tab"}>
                        <span>{item.name}</span>
                        <item.icon/>
                    </NavLink>))}
            </div>
        </nav>
    )
}