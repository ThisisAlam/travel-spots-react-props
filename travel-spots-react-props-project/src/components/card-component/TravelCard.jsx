import marker from "../../assets/marker.png"

export default function TravelCard(props){

    return(
        <>
            <div className="entry-card">
                <img className="card-img"
                src={props.entry.img.src} alt={props.entry.img.alt} />
                <div className="card-info">
                    <div className="location">
                        <img src={marker} alt="marker logo image" />
                        <p>{props.entry.country}</p>
                        <a href={props.entry.googleMapsLink}>View on google maps</a>
                    </div>
                    <h1>{props.entry.title}</h1>
                    <strong>{props.entry.dates}</strong>
                    <p>{props.entry.text}</p>
                </div>
            </div>
        </>
    )
}