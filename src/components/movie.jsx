import { LuDownload, LuLanguages, LuPlay } from "react-icons/lu"
import "../styles/movie.css"
import { useMovies } from "../context/Fetch"
import { useNavigate } from "react-router-dom";

export default function Movie({film}){
 
    const {addToWatchlist} = useMovies();

    const nav = useNavigate();
    const refer = () => nav(`/movie/${film.id}`);

    return(
        <div className="movie" onClick={refer}>
            <div className="meta">
                <span>{film.adult ? "Rated R" : "PG-13"}</span>
                <button
                data-title={`${film.liked ? "" : "Add to "}`}
                onClick={()=>{addToWatchlist(film)}}
                className="liked">{film.liked ? "Watched" : "Watchlist"}</button>
            </div>

            <div className="image">
                <img src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} alt={film.title} />
                <div className="play" data-title={`Play "${film.title} ${film.release_date.split("-")[0]}"`}>
                    <LuPlay/>
                </div>
            </div>

            <div className="info">
                <h3>{film.title}</h3>
                <p className="release">Release date: {film.release_date}</p>
                <p className="overview">{film.overview}</p>
            </div>
            <hr />
            <div className="low">
                  <span className="language">
                    <LuLanguages/>Language : {film.original_language}
                </span>
                <p className="views">{film.vote_count} people liked this film</p>

                <div className="download">
                    <LuDownload/> Download film
                </div>
            </div>
        </div>
    )
}