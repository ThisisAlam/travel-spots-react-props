import image from "../assets/globe.png"

export default function Header(){
    return(
        <header className="header">
            <img className="logo-img" src={image} alt="logo image" />
            <span>my travel journal</span>
        </header>
    )
}