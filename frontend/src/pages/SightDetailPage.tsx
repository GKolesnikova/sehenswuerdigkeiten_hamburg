import {Sight} from "../model/Sight";
import {Link, useParams} from "react-router-dom";
import React from "react";
import UpdateSight from "../components/UpdateSight";
import DeleteSight from "./DeleteSight";
import {ReplyIcon} from "@primer/octicons-react";
import "./SightDetailPage.css";



type SightDetailPageProps = {

    sights: Sight[];
    deleteSightById: (id: string | undefined)  => void;
    updateSight: (id: string | undefined, sight: Sight)  => void;

}

export default function SightDetailPage (props: SightDetailPageProps) {

    const params = useParams();
    const id = params.id;


    if ( id === undefined ) {
        return (<>"Sight not found with" + id + "id!"</>);
    }

    const findSight = props.sights.find((sight) => sight.id === id );

    if ( findSight === undefined ) {
        return (
            <div>
                    <div style={{color: "rgb(255 163 1)", textDecoration: "none"}}><h4>"Sorry! No Sight found!"</h4></div>
                    <div>
                        <a href={"/"} style={{color: "rgb(255 163 1)", textDecoration: "none"}}><h1>Zurück zur Galerie</h1></a>
                    </div>
                </div>
        );
    }



    return (
        <div>
            <div className="shadow p-5 mb-5 bg-white rounded ">
                <div  className="row d-flex justify-content-around " >
                    <div className= "col-4">
                        <Link to={"/"}>
                            <button type="button" className="btn btn-outline-success" style={{width: "13em", height: "2.5em"}}>
                                  <ReplyIcon size={24} /> Back</button>
                        </Link>
                    </div>

                    <div className= "col-4">
                        <button type="button" className="btn btn-outline-info" data-bs-toggle="modal"   data-bs-target="#exampleModal"   style={{width: "13em", height: "2.5em"}} >
                            <i className="bi bi-pencil-square" style={{ marginRight: "10px"}}></i>Update</button>
                        <UpdateSight sights={props.sights} updateSight={props.updateSight}/>
                    </div>

                    <div className= "col-4">
                        <DeleteSight sight={findSight}  deleteSightById={props.deleteSightById}  />
                        <button type="button" className="btn btn-outline-warning" data-bs-toggle="modal" data-bs-target="#staticBackdrop" style={{width: "13em", height: "2.5em"}}>
                            <i className="bi bi-trash3" style={{ marginRight: "10px"}}></i>Delete
                        </button>
                    </div>
                </div>


                <div className="col-12">
                    <h1>{findSight.name}</h1>
                </div>






                <div id="carouselExampleIndicators" className="carousel slide carousel-fade " data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                                className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                                aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={findSight.image1} className="d-block w-100" alt={findSight.name}/>
                        </div>
                        <div className="carousel-item">
                            <img src={findSight.image2} className="d-block w-100" alt={findSight.name}/>
                        </div>
                        <div className="carousel-item">
                            <img src={findSight.image3} className="d-block w-100" alt={findSight.name}/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Предыдущий</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Следующий</span>
                    </button>
                </div>

            </div>


            <div className="row" >
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


            <div className="shadow p-3 mb-5 bg-white rounded">
                <div className="row ">
                    <div className={"d-flex justify-content-center col-12"}>
                        <div className={"col-11"}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2369.861405521715!2d9.982204300000001!3d53.560241500000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b18f3decfe099d%3A0x4342a16041772e5c!2z0JPQsNC80LHRg9GA0LPRgdC60LjQuSDQsdC-0YLQsNC90LjRh9C10YHQutC40Lkg0YHQsNC0ICjQn9C70LDQvdGC0LXQvS3Rg9C9LdCR0LvQvtC80LXQvSk!5e0!3m2!1sru!2sde!4v1667595420384!5m2!1sru!2sde"
                            height="600" style={{border: "0", width: "inherit"}} title={"Location from this sight"}  loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>


            </div>
    )
}