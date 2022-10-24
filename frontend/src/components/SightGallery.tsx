import {Sight} from "../model/Sight";
import SightCard from "./SightCard";


type SightGalleryProps = {
     sights : Sight[] ;

}

export default function SightGallery (props: SightGalleryProps) {

     return (
         <div>
             {props.sights.length < 1 ?
             <h1>Keine Sehenswürdigkeiten vorhanden</h1>
             :
             props.sights.map((sight) =>
                 <SightCard sight={sight}/>)
             }
         </div>
     )
}