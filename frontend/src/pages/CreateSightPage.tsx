import {Sight} from "../model/Sight";
import React, {ChangeEvent, FormEvent} from "react";
import "./CreateSightPage.css";





type CreateSightProps = {

    addNewSight: (newSight: Sight) => void;
}

export default function CreateSightPage (props: CreateSightProps) {

    const [newSight, setSight] = React.useState( {
        name: "",
        image: "",
        address: "",
        website: "",
        time: "",
        description: "",
        location: "",
    })

    function handleChange (changeEvent: ChangeEvent<HTMLInputElement>) {
        console.log(changeEvent);
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
            alert ( `Please fill sight name, image, address, website, time, description and location `);
            return
        }
        props.addNewSight(newSight);
    }


    return (
        <div className="main-form"  >
            <h2>Create a new sight</h2>
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
                            name="image"
                            value={newSight.image}
                            id="exampleFormControlInput1"
                            placeholder="image"
                            required={true}
                            onChange={handleChange}
                     />
                </div>
                <div className="mb-3">
                     <input type="text"
                            className="form-control"
                            name="address"
                            value={newSight.address}
                            id="exampleFormControlInput1"
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
                            id="exampleFormControlInput1"
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
                            id="exampleFormControlInput1"
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
                           id="exampleFormControlInput1"
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
                           id="exampleFormControlInput1"
                           placeholder="location"
                           required={true}
                           onChange={handleChange}
                    />
                </div>
                <div className="form-check form-switch check-again">
                    <input style={{width: "7em", height: "1.7em", backgroundColor: "rgb(253 255 0)"}}
                           className="form-check-input"
                           name="check"
                           type="checkbox"
                           role="switch"
                           id="flexSwitchCheckDefault"
                           required={true}
                    />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault"><h4>Check all data again</h4></label>
                </div>

                <div className="d-grid gap-2">
                     <button className="btn btn-primary" type="submit" style={{backgroundColor: "#12e2e7"}}>Add</button>
                </div>
            </form>
        </div>
    )



}