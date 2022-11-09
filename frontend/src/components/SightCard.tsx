import {Sight} from "../model/Sight";
import "./SightCard.css";
import {Link} from "react-router-dom";
import { FormEvent, useState} from "react";
import {FavoriteList} from "../model/FavoriteList";



type SightCardProps = {
    sight: Sight;
    favoriteList: FavoriteList;
    addNewSightInFavoriteListe : (favoriteListId: string | undefined, sightId: string | undefined) => void;
    deleteSightFromFavoriteListe : (favoriteListId: string | undefined, sightId: string | undefined) => void;
}

export default function SightCard (props: SightCardProps) {

    const [inFavoriteList, setInFavoriteList] = useState(false);


    const handleFavoriteList = (event: FormEvent, sightId: string | undefined) => {
        setInFavoriteList(!inFavoriteList);
        console.log(inFavoriteList);

        let iconElement = document.getElementById("favorite-icon_" + sightId );
        let favoriteListId = props.favoriteList === undefined ? " " : props.favoriteList.id;

        if (inFavoriteList) {
             if ( iconElement != null  ) {
                 iconElement.classList.add("active");
                 props.addNewSightInFavoriteListe(favoriteListId, props.sight.id);
             }
        } else   {
            if ( iconElement != null ) {
                iconElement.classList.remove("active");
                props.deleteSightFromFavoriteListe(favoriteListId, props.sight.id);
            }
        }
    }



    return (
        <div className={"sight-card-haupt"}>
             <div className={"sight-card"}>
                 <div className="shadow p-3 mb-5 bg-white rounded">

                     <div  className="row d-flex justify-content-around " >
                         <div className= "col-4"></div>
                         <div className= "col-4">
                             <Link to={"/sights/" + props.sight.id} >
                                 <button type="button" className="btn btn-outline-info" data-bs-toggle="modal"   data-bs-target="#update-sight-form" style={{width: "13em", height: "2.5em"}} >Details</button>
                             </Link>
                         </div>
                         <div className= "col-4" style={{textAlign: "right", cursor: "pointer" }}>
                             <i id={"favorite-icon_" + props.sight.id} className="bi bi-star-fill favorite active "  onClick={(event) => handleFavoriteList(event, props.sight.id)} ></i>
                         </div>
                    </div>

                     <div className="col-12">
                         <h1>{props.sight.name}</h1>
                     </div>
                     <div className="col-12">
                         <Link to={"/sights/" + props.sight.id} >
                         <img className="w-100" src={props.sight.image1} alt={props.sight.name}/>
                         </Link>
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