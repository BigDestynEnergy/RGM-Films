import "../styles/popup.css"

export default function Loading({isOpen}){
    
    if(!isOpen) return null

    return(
        <div className="overlay">
            <div className="card">
                <p/>
                <span>Please wait</span>
            </div>
        </div>
    )
}