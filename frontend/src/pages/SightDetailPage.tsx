import {Sight} from "../model/Sight";
import {Link, useNavigate, useParams} from "react-router-dom";
import React from "react";
import UpdateSight from "../components/UpdateSight";


type SightDetailPageProps = {
    sight: Sight;
    sights: Sight[];
    deleteSightById: (id: string | undefined)  => void;
    updateSight: (id: string | undefined, sight: Sight)  => void;

}

export default function SightDetailPage (props: SightDetailPageProps) {
    const navigate = useNavigate()

    const params = useParams();
    const id = params.id;


    if ( id === undefined ) {
        return (<>"Sight not found with" + id + "id!"</>);
    }

    const findSight = props.sights.find((sight) => sight.id === id );

    if ( findSight === undefined ) {
        return (<>"Sorry! No Sight found!"</>);
    }



    const onDelete = (id: string | undefined) => {
        props.deleteSightById(id);
        navigate ('/');

    }



    return (
        <div>
            <Link to={"/"}>
                <button type="button" className="btn btn-outline-success" style={{width: "13em", height: "2.5em"}}>Back</button>
            </Link>


            <div className="shadow p-3 mb-5 bg-white rounded">
                <div  className="d-flex justify-content-around " >
                    <button type="button" className="btn btn-outline-info" data-bs-toggle="modal"   data-bs-target="#exampleModal"   style={{width: "13em", height: "2.5em"}} >Update</button>
                    <UpdateSight sight={props.sight} sights={props.sights} updateSight={props.updateSight}/>
                    <button type="button" className="btn btn-outline-warning" onClick={() => onDelete(params.id)}  style={{width: "13em", height: "2.5em"}} >Delete</button>
                </div>


                <div className="col-12">
                    <h1>{findSight.name}</h1>
                </div>
                <div className="col-12">
                    <img className="w-100" src={findSight.image} alt={findSight.name}/>
                </div>

            </div>


            <div className="row" >
                <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-smooth-scroll="true" className="scrollspy-example-2 overflow-auto scroll-content" tabIndex={0} >
                    <div className="col-12 p-3 " >


                        <h4>Adresse</h4>
                        <p> {findSight.address}</p>

                        <h4>Webseite</h4>
                        <p> {findSight.website}</p>

                        <h4>Öffnungszeit</h4>
                        <p> {findSight.time}</p>

                        <h4>Beschreibung</h4>
                        <p> {findSight.description}</p>

                        <h4>Lage</h4>
                        <p> {findSight.location}</p>

                    </div>
                </div>
            </div>





        </div>
    )



}