import "../styles/empty.css"

export default function Empty(){
    return(
        <div className="empty-overlay">
            <p>No movies found</p>
            <button onClick={()=>{
                window.location.reload();
            }}>Try again</button>
        </div>
    )
}