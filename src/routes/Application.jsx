import { Route, Routes } from "react-router-dom";
import Layout from "./layout";
import Movies from "../pages/Movies";
import Favorites from "../pages/Favorites";
import NotFound from "../components/NotFound";

export default function Application(){
    return(
        <Routes>
            <Route path="/" element={<Layout/>}>
            <Route index element={<Movies/>}/>
            <Route path="watchlist" element={<Favorites/>}/>
            </Route>

            <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
}