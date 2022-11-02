import {Sight} from "../model/Sight";
import SightCard from "./SightCard";
import {useState} from "react";



type SightGalleryProps = {
     sights : Sight[] ;
     getAllSights: () => void;
}

export default function SightGallery (props: SightGalleryProps) {

     const [filterText, setFilterText] = useState("");
     const filteredSights = props.sights.filter((sight) => sight.name.toLowerCase().includes(filterText.toLowerCase()));


     return (
         <div >
             <div className="mb-3" style= {{padding: "2% 12% 0 12%"}}>
                 <label htmlFor="exampleInputEmail1" className="form-label" ><h3>Enter the name of the sight</h3></label>
                 <input onChange={(event) => setFilterText(event.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style= {{border: "4px solid #6cf9f9", borderRadius: "21rem "}}/>
                 <label style= {{paddingTop: "1.5%", color: "rgb(255 163 1)"}} htmlFor="exampleInputEmail1" className="form-label">You are looking for <h5 >{filterText}</h5></label>
             </div>


             {filteredSights.length < 1 ?
             <h1>Keine Sehenswürdigkeiten vorhanden</h1>
             :
                 filteredSights.map((sight) =>
                 <SightCard sight={sight} sights={props.sights}   />)
             }
         </div>
     )
}