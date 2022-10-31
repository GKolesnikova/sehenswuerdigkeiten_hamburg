import {Sight} from "../model/Sight";
import "./SightCard.css";
import {Link} from "react-router-dom";



type SightCardProps = {
    sight: Sight;
    deleteSightById: (id: string | undefined)  => void;
    addNewSight: (newSight: Sight) => void;
}

export default function SightCard (props: SightCardProps) {

    return (
        <div className={"sight-card-haupt"}>
             <div className={"sight-card"}>
                 <div className="shadow p-3 mb-5 bg-white rounded">


                     <div  className="d-flex justify-content-around " style={{}} >
                     <Link to={"/form"} >
                     <button type="button" className="btn btn-outline-info" onClick={() => props.addNewSight(props.sight)} style={{width: "13em", height: "2.5em"}} >Add new Sight</button>
                     </Link>

                     <button type="button" className="btn btn-outline-warning" onClick={() => props.deleteSightById(props.sight.id)}  style={{width: "13em", height: "2.5em"}} >Delete</button>
                     </div>

                     <div className="col-12">
                         <h1>{props.sight.name}</h1>
                     </div>
                     <div className="col-12">
                         <img className="w-100" src={props.sight.image} alt={props.sight.name}/>
                     </div>




                 </div>


                 <div className="row" >


                         <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-smooth-scroll="true" className="scrollspy-example-2 overflow-auto scroll-content" tabIndex={0} >
                             <div className="col-12 p-3 " >







                                 <h4>Adresse</h4>
                                 <p> {props.sight.address}</p>


                                 <h4>Webseite</h4>
                                 <p> {props.sight.website}</p>


                                 <h4>Öffnungszeit</h4>
                                 <p> {props.sight.time}</p>


                                 <h4>Beschreibung</h4>
                                 <p> {props.sight.description}</p>


                                 <h4>Lage</h4>
                                 <p> {props.sight.location}</p>

                         </div>
                     </div>
                 </div>




             </div>
        </div>
    )
}