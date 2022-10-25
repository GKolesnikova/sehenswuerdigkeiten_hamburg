import {Sight} from "../model/Sight";


type SightCardProps = {
    sight: Sight;

}

export default function SightCard (props: SightCardProps) {

    return (
        <div>
            <p><h1>{props.sight.name}</h1></p>
            <img src={props.sight.image} alt={props.sight.name}/>
            <p>Adresse: {props.sight.address}</p>
            <p>Webseite: {props.sight.website}</p>
            <p>Öffnungszeit: {props.sight.time}</p>
            <p>{props.sight.description}</p>
            <p>{props.sight.location}</p>
        </div>
    )
}