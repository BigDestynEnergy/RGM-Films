import "../styles/full.css";
import { useNavigate, useParams } from "react-router-dom";
import { useMovies } from "../context/Fetch";
import {
  LuChevronLeft,
  LuCirclePlay,
  LuShare,
  LuStar,
} from "react-icons/lu";
import { useEffect } from "react";

export default function MovieFull() {
  const { id } = useParams();

  const nav = useNavigate();

  const goBack = () => nav(-1);

  const { movies, cast, fetchCast } = useMovies();

  const current = movies.find(
    (movie) => movie.id === Number(id)
  );

  useEffect(() => {
    fetchCast(id);
  }, [id]);

  if (!current) {
    return <p>Movie not found</p>;
  }

  return (
    <div className="movie-full">

      <div className="top" onClick={goBack}>
        <button>
          <LuChevronLeft />
        </button>

        <img
          src={`https://image.tmdb.org/t/p/w500${current.poster_path}`}
          alt={current.title}
        />
      </div>

      <div className="data">

        <h2>{current.title}</h2>

        <div className="meta">
          <span>{current.release_date}</span>

          <span>Movie</span>

          <span>
            <LuStar />
            No reviews yet
          </span>
        </div>

        <div className="overview">
          {current.overview}
        </div>

        <div className="CTA">

          <button>
            <LuCirclePlay />
            Watch now
          </button>

          <button>
            <LuShare />
            Share this film
          </button>

        </div>

      </div>

      <div className="cast">

        {cast[id]?.map((cm) => (

          <div className="cast-card" key={cm.id}>

            {cm.profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500${cm.profile_path}`}
                alt={cm.name}
              />
            ) : (
              <div className="no-image">
                No image
              </div>
            )}

            <h3>{cm.name}</h3>

            <p>{cm.character}</p>

          </div>

        ))}

      </div>

    </div>
  );
}