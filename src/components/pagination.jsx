import { useMovies } from "../context/Fetch"
import "../styles/pagination.css"

export default function Pagination(){
    const {page, totalPages, nextPage,previousPage} = useMovies();

    return(
        <div className="pagination">
            <button onClick={previousPage}>Prev</button>
            <span>{page} of {totalPages}</span>
            <button onClick={nextPage}>Next</button>
        </div>
    )
}