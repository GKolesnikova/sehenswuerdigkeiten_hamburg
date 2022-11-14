import React, {FormEvent, useState} from "react";
import "./RegisterModul.css";
import {AppUser} from "../model/AppUser";
import {toast} from "react-toastify";



type RegisterModulProps = {
    register: (newAppUser: AppUser) => void;

}

export default function RegisterModul (props: RegisterModulProps) {

    const [newUserName, steNewUserName] = useState <string> ("");
    const [newPassword, setNewPassword] = useState <string> ("");
    const [newUserFirstName, setNewUserFirstName] = useState <string> ("");
    const [newUserLastName, setNewUserLastName] = useState <string> ("");
    const [newEMail, setNewEMail] = useState <string> ("");
    const [newAddress, setNewAddress] = useState <string> ("");
    const [newCity, setNewCity] = useState <string> ("");


    const onRegister = (event: FormEvent )  => {
        event.preventDefault()

        if ( !newUserName || !newPassword || !newUserFirstName || !newUserLastName || !newEMail || !newAddress || !newCity ) {
            toast.error ( `Please fill username, password, first name, last name, e-Mail, address, city`);
            return
        }

        const newAppUser = {
            userName: newUserName,
            password: newPassword,
            userFirstName: newUserFirstName,
            userLastName: newUserLastName,
            eMail: newEMail,
            address: newAddress,
            city: newCity
        }
        props.register(newAppUser);
    }



    return (
        <div>



            <div className="modal fade" id="exampleModal" tabIndex= {-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Create an account</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon1">Username</span>
                                    <input type="text"
                                           className="form-control"
                                           name="userName"
                                           value={newUserName}
                                           placeholder="Username"
                                           aria-label="Username"
                                           aria-describedby="basic-addon1"
                                           onChange={(e) => steNewUserName(e.target.value)}
                                           required={true}
                                    />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon1">Password</span>
                                    <input type="text"
                                           className="form-control"
                                           name="password"
                                           value={newPassword}
                                           placeholder="Password"
                                           aria-label="Username"
                                           aria-describedby="basic-addon1"
                                           onChange={(e) => setNewPassword(e.target.value)}
                                           required={true}
                                    />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon1">First name</span>
                                    <input type="text"
                                           className="form-control"
                                           name="userFirstName"
                                           value={newUserFirstName}
                                           placeholder="First name"
                                           aria-label="Username"
                                           aria-describedby="basic-addon1"
                                           onChange={(e) => setNewUserFirstName(e.target.value)}
                                           required={true}
                                    />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon1">Last name</span>
                                    <input type="text"
                                           className="form-control"
                                           name="userLastName"
                                           value={newUserLastName}
                                           placeholder="Last name"
                                           aria-label="Username"
                                           aria-describedby="basic-addon1"
                                           onChange={(e) => setNewUserLastName(e.target.value)}
                                           required={true}
                                    />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon1">E-Mail</span>
                                    <input type="text"
                                           className="form-control"
                                           name="eMail"
                                           value={newEMail}
                                           placeholder="E-Mail"
                                           aria-label="Username"
                                           aria-describedby="basic-addon1"
                                           onChange={(e) => setNewEMail(e.target.value)}
                                           required={true}
                                    />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon1">Address</span>
                                    <input type="text"
                                           className="form-control"
                                           name="address"
                                           value={newAddress}
                                           placeholder="Address"
                                           aria-label="Username"
                                           aria-describedby="basic-addon1"
                                           onChange={(e) => setNewAddress(e.target.value)}
                                           required={true}
                                    />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon1">City</span>
                                    <input type="text"
                                           className="form-control"
                                           name="city"
                                           value={newCity}
                                           placeholder="City"
                                           aria-label="Username"
                                           aria-describedby="basic-addon1"
                                           onChange={(e) => setNewCity(e.target.value)}
                                           required={true}
                                    />
                                </div>
                        </div>
                        <div className="modal-footer">
                            <button type="submit" className="btn btn-outline-info reg" data-bs-dismiss="modal" onClick={onRegister}  >Registration</button>
                            <button type="button" className="btn  close" data-bs-dismiss="modal" >Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}