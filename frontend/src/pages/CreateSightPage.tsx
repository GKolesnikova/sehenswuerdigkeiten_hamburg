import {Sight} from "../model/Sight";
import React, {ChangeEvent, FormEvent} from "react";
import "./CreateSightPage.css";
import {useNavigate} from "react-router-dom";



type CreateSightProps = {

    addNewSight: (newSight: Sight) => void;
}

export default function CreateSightPage (props: CreateSightProps) {
    const navigate = useNavigate()


    const [newSight, setSight] = React.useState( {
        name: "",
        image1: "",
        image2: "",
        image3: "",
        address: "",
        website: "",
        time: "",
        description: "",
        location: "",
    })

    function handleChange (changeEvent: ChangeEvent<HTMLInputElement>) {
        setSight ( prevSight => ({
            ...prevSight,
            [changeEvent.target.name]:
                changeEvent.target.type === "checkbox" ? changeEvent.target.checked
                    : changeEvent.target.value
        }))
    }


    function handleSubmit (event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        if ( !newSight ) {
            alert ( `Please fill sight name, image1, image2, image3, address, website, time, description and location `);
            return
        }
        props.addNewSight(newSight);
        navigate ('/');
    }


    return (
        <div className="main-form"  >
            <h2 style={{color: "rgb(137 93 17)"}}>Create a new sight</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input type="text"
                           className="form-control"
                           name="name"
                           value={newSight.name}
                           id="exampleFormControlInput1"
                           placeholder="name"
                           required={true}
                           onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                     <input type="text"
                            className="form-control"
                            name="image1"
                            value={newSight.image1}
                            id="exampleFormControlInput2"
                            placeholder="image1"
                            required={true}
                            onChange={handleChange}
                     />
                </div>
                <div className="mb-3">
                    <input type="text"
                           className="form-control"
                           name="image2"
                           value={newSight.image2}
                           id="exampleFormControlInput3"
                           placeholder="image2"
                           required={true}
                           onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <input type="text"
                           className="form-control"
                           name="image3"
                           value={newSight.image3}
                           id="exampleFormControlInput4"
                           placeholder="image3"
                           required={true}
                           onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                     <input type="text"
                            className="form-control"
                            name="address"
                            value={newSight.address}
                            id="exampleFormControlInput5"
                            placeholder="address"
                            required={true}
                            onChange={handleChange}
                     />
                </div>
                <div className="mb-3">
                     <input type="text"
                            className="form-control"
                            name="website"
                            value={newSight.website}
                            id="exampleFormControlInput6"
                            placeholder="website"
                            required={true}
                            onChange={handleChange}
                     />
                </div>
                <div className="mb-3">
                     <input type="text"
                            className="form-control"
                            name="time"
                            value={newSight.time}
                            id="exampleFormControlInput7"
                            placeholder="time"
                            required={true}
                            onChange={handleChange}
                     />
                </div>
                <div className="mb-3">
                    <input style={{height: "11em"}}
                           type="text"
                           className="form-control"
                           name="description"
                           value={newSight.description}
                           id="exampleFormControlInput8"
                           placeholder="sight description"
                           required={true}
                           onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <input type="text"
                           className="form-control"
                           name="location"
                           value={newSight.location}
                           id="exampleFormControlInput9"
                           placeholder="location"
                           required={true}
                           onChange={handleChange}
                    />
                </div>
                <div className="form-check form-switch check-again">
                    <input style={{width: "7em", height: "1.7em", backgroundColor: "#fffb50" }}
                           className="form-check-input"
                           name="check"
                           type="checkbox"
                           role="switch"
                           id="flexSwitchCheckDefault"
                           required={true}
                    />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault"><h4 style={{color: "rgb(137 93 17)"}}>Check all data again</h4></label>
                </div>

                <div className="d-grid gap-2">
                     <button className="btn btn-outline-info add" type="submit"  >Add new sight</button>
                </div>
            </form>
        </div>
    )
}