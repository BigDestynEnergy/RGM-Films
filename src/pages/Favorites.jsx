import Movie from "../components/movie";
import { useMovies } from "../context/Fetch";
import "../styles/favs.css";

export default function Favorites() {
  const { watchlist } = useMovies();

  return (
    <section className="Favorites">
      <h1>My Favorites</h1>

      {watchlist?.length === 0 ? (
        <p className="empty-favorites">No movies in your favorites yet.</p>
      ) : (
        <div className="favorites-grid">
            {watchlist.map((movie)=>(<Movie key={movie.id} film={movie}/>))}
        </div>
      )}
    </section>
  );
}
