import {Sight} from "../model/Sight";
import SightCard from "./SightCard";
import {useState} from "react";
import {UserInfoDto} from "../model/UserInfoDto";
import {WeatherObject} from "../model/WeatherObject";
import WeatherObjectCard from "./WeatherObjectCard";



type SightGalleryProps = {
     weatherObject: WeatherObject | undefined;
     sights : Sight[] ;
     me: UserInfoDto | undefined;
     addNewSightToFavoriteListUser : (appUserId: string, sightId: string | undefined) => void;
     deleteSightFromFavoriteListeUser : (appUserId: string, sightId: string | undefined) => void;
}

export default function SightGallery (props: SightGalleryProps) {

     const [filterText, setFilterText] = useState("");
     const filteredSights = props.sights.filter((sight) => sight.name.toLowerCase().includes(filterText.toLowerCase()));


     return (
         <div>
             <div className="mb-3" style= {{padding: "0 12%  "}}>

                 { props.weatherObject === undefined ?
                     <p>Failed to load weather widget</p>
                 :
                     <WeatherObjectCard  weatherObject={props.weatherObject} />

                 }



                 <label htmlFor="exampleInputEmail1" className="form-label" style={{ color: "#d17e31"}}><h3>Enter the name of the sight</h3></label>
                 <input onChange={(event) => setFilterText(event.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style= {{border: "4px solid #6cf9f9", borderRadius: "21rem "}}/>
                 <label style= {{paddingTop: "1.5%", color: "rgb(255 163 1)"}} htmlFor="exampleInputEmail1" className="form-label">You are looking for <h5 >{filterText}</h5></label>
             </div>

            <div   style={{margin: "0 7%"}}>
                 {filteredSights.length < 1 ?
                 <h1 style={{color: "rgb(137 93 17)"}}>Keine Sehenswürdigkeiten vorhanden</h1>
                 :
                     filteredSights.map((sight) =>
                         <SightCard key={sight.id} sight={sight} me={props.me} addNewSightToFavoriteListUser={props.addNewSightToFavoriteListUser} deleteSightFromFavoriteListeUser={props.deleteSightFromFavoriteListeUser}  />)

                     }
            </div>
         </div>
     )
}