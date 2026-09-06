import "../styles/movies.css"
import Empty from "../components/Empty";
import { useMovies } from "../context/Fetch";
import { usePopup } from "../context/PopupProvider"
import Movie from "../components/movie";
import Pagination from "../components/pagination";


export default function Movies(){
    const {notify} = usePopup();
    const {movies} = useMovies();

    return(
        <section className="Movies">
            {movies.length === 0 && (<Empty/>)}
            {movies.length !== 0 && (
               <div className="exists">
                 <div className="movies-grid">
                    {movies.map((movie)=>(<Movie key={movie.id} film={movie}/>))}
                </div>

                <Pagination/>
               </div>
            )}
        </section>
    )
}