import {Sight} from "../model/Sight";
import {useNavigate, useParams} from "react-router-dom";
import React, {FormEvent, useState} from "react";


type UpdateSightProps = {
    sights: Sight[];
    updateSight: (id: string | undefined, sight: Sight)  => void;

}

export default function UpdateSight (props: UpdateSightProps) {

    const navigate = useNavigate()

    const params = useParams();
    const id = params.id;


    const findSight = props.sights.find((sight) => sight.id === id);

    const [updatedName, setUpdatedName] = useState( findSight  ?  findSight.name : "" );
    const [updatedImage1, setUpdatedImage1] = useState(findSight  ?  findSight.image1 : "" );
    const [updatedImage2, setUpdatedImage2] = useState(findSight  ?  findSight.image2 : "" );
    const [updatedImage3, setUpdatedImage3] = useState(findSight  ?  findSight.image3 : "" );
    const [updatedAddress, setUpdatedAddress] = useState(findSight  ?  findSight.address : "" );
    const [updatedWebsite, setUpdatedWebsite] = useState(findSight  ?  findSight.website : "" );
    const [updatedTime, setUpdatedTime] = useState(findSight  ?   findSight.time : "" );
    const [updatedDescription, setUpdatedDescription] = useState(findSight  ?   findSight.description : "" );
    const [updatedLocation, setUpdatedLocation] = useState(findSight  ?  findSight.location : "" );


    if ( id === undefined ) {
        return (<>"Sight not found with" + id + "id!"</>);
    }

    if ( findSight === undefined ) {
        return (<>"Sorry! No Sight found!"</>);
    }



    const handleSubmit = (event : FormEvent ) => {

        event.preventDefault();

        if ( !updatedName || !updatedImage1 || !updatedImage2 || !updatedImage3 || !updatedAddress || !updatedWebsite || !updatedTime || !updatedDescription || !updatedLocation ) {
            alert (`Please fill sight name, image, address, website, time, description, location.`)
            return
        }

        const updatedSight: Sight = {
            id: id,
            name : updatedName,
            image1: updatedImage1,
            image2: updatedImage2,
            image3: updatedImage3,
            address: updatedAddress,
            website: updatedWebsite,
            time: updatedTime,
            description: updatedDescription,
            location: updatedLocation
        }

        props.updateSight(id, updatedSight);
        //window.location.reload()
        navigate(`/sights/` +id);

    }

return (
    <div>
         <div className="modal fade" id="exampleModal" tabIndex= {-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <input type="text"
                                       className="form-control"
                                       name="name"
                                       defaultValue={updatedName}
                                       id="exampleFormControlInput1"
                                       placeholder="name"
                                       required={true}
                                       onChange={(event) => setUpdatedName(event.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <input type="text"
                                       className="form-control"
                                       name="image1"
                                       value={updatedImage1}
                                       id="exampleFormControlInput1"
                                       placeholder="image1"
                                       required={true}
                                       onChange={(event) => setUpdatedImage1(event.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <input type="text"
                                       className="form-control"
                                       name="image2"
                                       value={updatedImage2}
                                       id="exampleFormControlInput1"
                                       placeholder="image2"
                                       required={true}
                                       onChange={(event) => setUpdatedImage2(event.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <input type="text"
                                       className="form-control"
                                       name="image3"
                                       value={updatedImage3}
                                       id="exampleFormControlInput1"
                                       placeholder="image3"
                                       required={true}
                                       onChange={(event) => setUpdatedImage3(event.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <input type="text"
                                       className="form-control"
                                       name="address"
                                       value={updatedAddress}
                                       id="exampleFormControlInput1"
                                       placeholder="address"
                                       required={true}
                                       onChange={(event) => setUpdatedAddress(event.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <input type="text"
                                       className="form-control"
                                       name="website"
                                       value={updatedWebsite}
                                       id="exampleFormControlInput1"
                                       placeholder="website"
                                       required={true}
                                       onChange={(event) => setUpdatedWebsite(event.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <input type="text"
                                       className="form-control"
                                       name="time"
                                       value={updatedTime}
                                       id="exampleFormControlInput1"
                                       placeholder="time"
                                       required={true}
                                       onChange={(event) => setUpdatedTime(event.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <input style={{height: "11em"}}
                                       type="text"
                                       className="form-control"
                                       name="description"
                                       value={updatedDescription}
                                       id="exampleFormControlInput1"
                                       placeholder="sight description"
                                       required={true}
                                       onChange={(event) => setUpdatedDescription(event.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <input type="text"
                                       className="form-control"
                                       name="location"
                                       value={updatedLocation}
                                       id="exampleFormControlInput1"
                                       placeholder="location"
                                       required={true}
                                       onChange={(event) => setUpdatedLocation(event.target.value)}
                                />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="submit" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleSubmit} style={{backgroundColor: "#12e2e7"}}>Update</button>
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" style={{backgroundColor: "orange"}}>Close</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
)
}