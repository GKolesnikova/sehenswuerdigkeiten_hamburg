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


                     <Link to={"/form"} >
                     <button type="button" className="btn btn-outline-info" onClick={() => props.addNewSight(props.sight)}  >Add new Sight</button>
                     </Link>

                     <button type="button" className="btn btn-outline-warning" onClick={() => props.deleteSightById(props.sight.id)}   >Delete</button>


                     <p><h1>{props.sight.name}</h1></p>
                    <img src={props.sight.image} alt={props.sight.name}/>
                    <p>Adresse: {props.sight.address}</p>
                    <p>Webseite: {props.sight.website}</p>
                    <p>Öffnungszeit: {props.sight.time}</p>
                    <p>{props.sight.description}</p>
                    <p>{props.sight.location}</p>

                 </div>


                 <div className="row" >

                     <div className="col-12">
                         <h1>{props.sight.name}</h1>
                     </div>
                     <div className="col-12">
                         <img className="w-100" src={props.sight.image} alt={props.sight.name}/>
                     </div>
                     <div></div>
                     <div className="col-4 p-3">
                         <nav id="navbar-example3" className="h-auto flex-column align-items-stretch pe-4 border-end">
                             <nav className="nav nav-pills flex-column">
                                 <a className="nav-link" href="#item-1">Item 1</a>
                                 <nav className="nav nav-pills flex-column">
                                     <a className="nav-link ms-3 my-1" href="#item-1-1">Item 1-1</a>
                                     <a className="nav-link ms-3 my-1" href="#item-1-2">Item 1-2</a>
                                 </nav>
                                 <a className="nav-link" href="#item-2">Item 2</a>
                                 <a className="nav-link" href="#item-3">Item 3</a>
                                 <nav className="nav nav-pills flex-column">
                                     <a className="nav-link ms-3 my-1" href="#item-3-1">Item 3-1</a>
                                     <a className="nav-link ms-3 my-1" href="#item-3-2">Item 3-2</a>
                                 </nav>
                             </nav>
                         </nav>
                     </div>

                     <div className="col-8 p-3 " >
                         <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-smooth-scroll="true" className="scrollspy-example-2 overflow-auto scroll-content" tabIndex={0} >
                             <div id="item-1">
                                 <h4>Item 1</h4>
                                 <p> {props.sight.address}</p>
                             </div>
                             <div id="item-1-1">
                                 <h5>Item 1-1</h5>
                                 <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lore</p>
                             </div>
                             <div id="item-1-2">
                                 <h5>Item 1-2</h5>
                                 <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lore</p>
                             </div>
                             <div id="item-2">
                                 <h4>Item 2</h4>
                                 <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lore</p>
                             </div>
                             <div id="item-3">
                                 <h4>Item 3</h4>
                                 <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lore</p>
                             </div>
                             <div id="item-3-1">
                                 <h5>Item 3-1</h5>
                                 <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lore</p>
                             </div>
                             <div id="item-3-2">
                                 <h5>Item 3-2</h5>
                                 <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lore</p>
                             </div>
                         </div>
                     </div>
                 </div>




             </div>
        </div>
    )
}