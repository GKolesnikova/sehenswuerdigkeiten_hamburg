import {Sight} from "../model/Sight";
import React from "react";
import "./DeleteSight.css";



type DeleteSightProps = {
    sight: Sight;
    deleteSightById: (id: string | undefined)  => void;
}

export default function DeleteSight (props: DeleteSightProps) {
    const onDelete = () => {
        props.deleteSightById(props.sight.id);
        window.location.reload()
    }


return (
            <div>
                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex= {-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="staticBackdropLabel" style={{color: "rgb(255 112 0)"}}> Delete Sight </h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                Are you sure you want to delete <h5>"{props.sight.name}" ?</h5> 10 more seconds to think ...
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-outline-warning deletion" data-bs-dismiss="modal "  onClick={onDelete}  ><i className="bi bi-trash3" style={{ marginRight: "10px"}}></i>Confirm Deletion</button>
                                <button type="button" className="btn  btn-outline-success back" data-bs-dismiss="modal"> Change mind </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
}