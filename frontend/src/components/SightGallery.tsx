import {Sight} from "../model/Sight";
import SightCard from "./SightCard";
import {useState} from "react";



type SightGalleryProps = {
     sights : Sight[] ;
     getAllSights: () => void;
     addNewSight: (newSight: Sight) => void;
     deleteSightById: (id: string | undefined) => void;
}

export default function SightGallery (props: SightGalleryProps) {

     const [filterText, setFilterText] = useState("");
     const filteredSights = props.sights.filter((sight) => sight.name.toLowerCase().includes(filterText.toLowerCase()));


     return (
         <div>
             <div className="mb-3" style= {{padding: "5%"}}>
                 <label htmlFor="exampleInputEmail1" className="form-label"><h4>Enter the name of the sight</h4></label>
                 <input onChange={(event) => setFilterText(event.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                 <label style= {{padding: " 1.5% 0"}} htmlFor="exampleInputEmail1" className="form-label">You are looking for {filterText}</label>
             </div>


             {filteredSights.length < 1 ?
             <h1>Keine Sehenswürdigkeiten vorhanden</h1>
             :
                 filteredSights.map((sight) =>
                 <SightCard sight={sight} addNewSight={props.addNewSight} deleteSightById={props.deleteSightById}/>)
             }
         </div>
     )
}