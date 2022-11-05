import {Sight} from "../model/Sight";



type DeleteSightProps = {
    sight: Sight;
    deleteSightById: (id: string | undefined)  => void;
}

export default function DeleteSight (props: DeleteSightProps) {

return (
    <div>

    <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel"
         tabIndex= {-1}>
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalToggleLabel">Delete {props.sight.name}</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    Are you sure you want to delete  {props.sight.name} ?
                </div>
                <div className="modal-footer">
                    <button className="btn btn-primary" data-bs-target="#exampleModalToggle2"
                            data-bs-toggle="modal">Open second modal
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2"
         tabIndex={-1}>
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalToggleLabel2">Modal 2</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    Hide this modal and show the first with the button below.
                </div>
                <div className="modal-footer">
                    <button className="btn btn-primary"  >Back
                        to first
                    </button>
                </div>
            </div>
        </div>
    </div>
    <a className="btn btn-primary" data-bs-toggle="modal" href="#exampleModalToggle" role="button">Delete</a>







        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            Delete
        </button>


        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex= {-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">Delete {props.sight.name} </h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        Are you sure you want to delete {props.sight.name}?
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Understood</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
)


}