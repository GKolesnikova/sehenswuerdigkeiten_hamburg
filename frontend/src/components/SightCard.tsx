import {Sight} from "../model/Sight";
import "./SightCard.css";



type SightCardProps = {
    sight: Sight;

}

export default function SightCard (props: SightCardProps) {

    return (
        <div className={"sight-card-haupt"}>
             <div className={"sight-card"}>
                 <div className="shadow p-3 mb-5 bg-white rounded">

                <p><h1>{props.sight.name}</h1></p>
                <img src={props.sight.image} alt={props.sight.name}/>
                <p>Adresse: {props.sight.address}</p>
                <p>Webseite: {props.sight.website}</p>
                <p>Öffnungszeit: {props.sight.time}</p>
                <p>{props.sight.description}</p>
                <p>{props.sight.location}</p>

                 </div>
            </div>
        </div>
    )
}