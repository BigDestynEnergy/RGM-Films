import { createContext, useContext, useEffect, useState } from "react";
import { useLoadingProvider } from "./LoadingContext";
import { usePopup } from "./PopupProvider";

const Context = createContext();

export const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [getQuery, setGetQuery] = useState("");
  const [watchlist, setWatchlist] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const { startLoading } = useLoadingProvider();
  const { notify } = usePopup();

  const token = import.meta.env.VITE_KEY;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        startLoading(true);

        if (!token) {
          throw new Error("TMDB API token is missing.");
        }

        const url = query.trim()
          ? `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
              query
            )}&language=en-US&page=${page}`
          : `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`

        const response = await fetch(url, {
          headers: {
            Authorization: `Bearer ${token}`,
            accept: "application/json",
          },
        });

        if (!response.ok) {
          notify("Something went wrong");
          throw new Error(`TMDB API error: ${response.status}`);
        }

        const data = await response.json();

        setMovies(data.results || []);
        setTotalPages(data.total_pages || 1);
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        startLoading(false);
      }
    };

    fetchMovies();
  }, [getQuery, page]);

  useEffect(()=>{
    const timer = setTimeout(() => {
      setGetQuery(query);
    }, 800);

    return () => clearTimeout(timer);
  }, [query]);

  const addToWatchlist = (film) => {
  setWatchlist((prev) => {
    const exists = prev.some((movie) => movie.id === film.id);

    if (exists) {
      return prev.filter((movie) => movie.id !== film.id);
    }

    return [...prev, { ...film, liked: true }];
  });

  setMovies((prev) =>
    prev.map((movie) =>
      movie.id === film.id
        ? { ...movie, liked: !movie.liked }
        : movie
    )
  );
};

const nextPage = () => {
  setPage((prev) => Math.min(prev + 1, totalPages))
}

const previousPage = () => {
  setPage((prev) => Math.min(prev - 1))
}


  return (
   <Context.Provider
  value={{
    movies,
    setQuery,
    query,
    
    watchlist,
    addToWatchlist,

      page,
        totalPages,
        nextPage,
        previousPage,
  }}
>
  {children}
</Context.Provider>

  );
};

export const useMovies = () => useContext(Context);
