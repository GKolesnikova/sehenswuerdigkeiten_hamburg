import {Sight} from "../model/Sight";
import "./SightCard.css";
import {Link} from "react-router-dom";
import {FormEvent} from "react";
import {UserInfoDto} from "../model/UserInfoDto";
import {toast} from "react-toastify";



type SightCardProps = {
    sight: Sight;
    me: UserInfoDto | undefined;
    addNewSightToFavoriteListUser : (appUserId: string, sightId: string | undefined) => void;
    deleteSightFromFavoriteListeUser : (appUserId: string, sightId: string  | undefined ) => void;

}

export default function SightCard (props: SightCardProps) {

    const handleFavoriteList = (event: FormEvent, sightId: string | undefined) => {

        if ( ! props.me ) {
            toast.error ( `Please sign in`);
            return;
        }
        let iconElement = document.getElementById("favorite-icon_" + sightId );
        if (!iconElement) {
            return;
        }
        let isSightActive = iconElement.classList.toggle("active");

        if ( isSightActive ) {
            props.addNewSightToFavoriteListUser(props.me?.id, props.sight.id);
        } else {
            props.deleteSightFromFavoriteListeUser(props.me?.id, props.sight.id);
        }
    }


    const isSightInFavoriteListUser = (sightId: string  | undefined) => {
        if ( sightId === null || sightId === undefined || props.me?.favoriteSightsIds === undefined ) {
            return "";
        }
        return props.me?.favoriteSightsIds.includes(sightId) ? "active" : "";
    }



    return (
            <div className="col-sm-12 col-md-12 sight-card-haupt ">
                 <div className="row row-cols-2 sight-card">
                     <div className="sight-card-info shadow p-3   bg-white rounded ">

                         <div  className="row d-flex justify-content-around " style={{paddingBottom: "3%"}}>
                             <div className= "col-4"></div>
                             <div className= "col-4">
                                 <Link to={"/sights/" + props.sight.id}  >
                                        <button type="button" className="btn btn-outline-info detal" data-bs-toggle="modal"   data-bs-target="#update-sight-form" style={{  height: "2.5em"}} >Details</button>
                                 </Link>
                             </div>
                             <div className= "col-4" style={{textAlign: "right", cursor: "pointer" }}>
                                 <i id={"favorite-icon_" + props.sight.id}
                                    className={"bi bi-star-fill favorite  " + isSightInFavoriteListUser(props.sight.id)}
                                    onClick={(event) => handleFavoriteList(event, props.sight.id)} ></i>
                             </div>
                        </div>
                         <div className="col-12 name">
                             <h4>{props.sight.name}</h4>
                         </div>
                         <div className="col-12"  >
                             <Link to={"/sights/" + props.sight.id} >
                                 <img className="w-100"   src={props.sight.image1} alt={props.sight.name}/>
                             </Link>
                         </div>
                     </div>

                    <div className="col-6">
                         <div className="row" >
                                 <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-smooth-scroll="true" className="scrollspy-example-2 overflow-auto scroll-content" tabIndex={0} >
                                     <div className="col-12  " >
                                         <div>
                                             <h4 className="titels">Adresse</h4>
                                             <p className="details"> {props.sight.address} </p>
                                         </div>
                                         <div>
                                             <h4 className="titels">Webseite</h4>
                                             <p className="details"> {props.sight.website}</p>
                                         </div>
                                         <div>
                                             <h4 className="titels">Öffnungszeit</h4>
                                             <p className="details"> {props.sight.time}</p>
                                         </div>
                                         <div>
                                             <h4 className="titels">Beschreibung</h4>
                                             <p className="details"> {props.sight.description}</p>
                                         </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                 </div>
            </div>
            )
}