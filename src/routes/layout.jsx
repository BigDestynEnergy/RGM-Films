import { Outlet } from "react-router-dom";
import Menu from "../components/menu";
import Header from "../components/Header";

export default function Layout(){
    return(
        <div className="layout">
            <Header/>
            <Outlet/>
            <Menu/>
        </div>
    )
}