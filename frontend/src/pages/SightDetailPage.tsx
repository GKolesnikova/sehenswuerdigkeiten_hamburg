import {Sight} from "../model/Sight";
import {Link, useParams} from "react-router-dom";
import React, {useEffect} from "react";
import UpdateSight from "../components/UpdateSight";
import DeleteSight from "../components/DeleteSight";
import {ReplyIcon} from "@primer/octicons-react";
import "./SightDetailPage.css";
import isAdmin from "../components/IsAdmin";
import {UserInfoDto} from "../model/UserInfoDto";



type SightDetailPageProps = {

    sights: Sight[];
    deleteSightById: (id: string | undefined)  => void;
    updateSight: (id: string | undefined, sight: Sight)  => void;
    me: UserInfoDto | undefined;

}

export default function SightDetailPage (props: SightDetailPageProps) {

    useEffect( () => window.scrollTo( { top:0, left:0, behavior:"auto"}));


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
                <div className="zuruck block">
                    <a className="zuruck"  href={"/"} style={{color: "rgb(255 163 1)", textDecoration: "none"}}><h1>Zurück zur Galerie</h1></a>
                </div>
            </div>
        );
    }


    return (
                <div>
                    <div className="shadow p-4 mb-5 bg-white rounded  ">
                        <div  className="row d-flex justify-content-around " >
                            <div className= "col-4  ">
                                <Link to={"/"}>
                                    <button type="button" className="btn btn-outline-success back" style={{width: "13em", height: "2.5em"}}>
                                          <ReplyIcon size={24} /> Back
                                    </button>
                                </Link>
                            </div>


        { isAdmin (props.me) &&
                            <div className= "col-4">
                                <button type="button" className="btn btn-outline-info update" data-bs-toggle="modal"   data-bs-target="#exampleModal1"   style={{width: "13em", height: "2.5em"}} >
                                    <i className="bi bi-pencil-square" style={{ marginRight: "10px"}}></i>Update
                                </button>
                                <UpdateSight  sights={props.sights} updateSight={props.updateSight}/>
                            </div>
        }
        { isAdmin (props.me) &&
                            <div className= "col-4">
                                <DeleteSight sight={findSight}  deleteSightById={props.deleteSightById}  />
                                <button type="button" className="btn btn-outline-warning delete" data-bs-toggle="modal" data-bs-target="#staticBackdrop" style={{width: "13em", height: "2.5em"}}>
                                    <i className="bi bi-trash3" style={{ marginRight: "10px"}}></i>Delete
                                </button>
                            </div>
        }

                        </div>

                        <div className="col-12 name">
                            <h1>{findSight.name}</h1>
                        </div>

                        <div id="carouselExampleIndicators" className="carousel slide carousel-fade fotos-blok" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                                        className="active" aria-current="true" aria-label="Slide 1">
                                </button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                                        aria-label="Slide 2">
                                </button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                                        aria-label="Slide 3">
                                </button>
                            </div>
                            <div className="carousel-inner fotos">
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
                                <h4 className="titels">Adresse</h4>
                                <p className="details"> {findSight.address}</p>

                                <h4 className="titels">Webseite</h4>
                                <p className="details"> {findSight.website}</p>

                                <h4 className="titels">Öffnungszeit</h4>
                                <p className="details"> {findSight.time}</p>

                                <h4 className="titels">Beschreibung</h4>
                                <p className="details"> {findSight.description}</p>

                            </div>
                     </div>
                    <div style={{border: "6px solid #fffb4f"}}>
                        <div className="shadow p-4 mb-5 bg-white rounded">
                            <div className="row ">
                                <div className={"d-flex justify-content-center col-12"}>
                                    <div className={"col-11 karte"}>
                                        <iframe
                                            src={findSight.location}
                                            height="600" style={{border: "0", width: "inherit"}}  title={"Location"} loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade">
                                        </iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
         )
}