import data from "../../data/data.js"
import TravelCard from "./card-component/TravelCard.jsx"

export default function MainContent(){
    const travelCardEntry = data.map((entry)=>{
        return <TravelCard             
                    key={entry.id}
                    entry={entry}
                    // {...entry}
                    // img= {entry.img}
                    // title={entry.title}
                    // country= {entry.country}
                    // googleMapsLink= {entry.googleMapsLink}
                    // dates= {entry.dates}
                    // text= {entry.text}
                />
    })
       return(
        <main className="main">
            {travelCardEntry}
        </main>
    )
}