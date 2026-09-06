import "../styles/popup.css"

export default function Popup({isOpen, message}){
    if(!isOpen) return null
    return(
        <div className="popup">
            {message}
        </div>
    )
}