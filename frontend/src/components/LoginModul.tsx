import React, {ChangeEvent, FormEvent, useState} from "react";
import RegisterModul from "./RegisterModul";
import {AppUser} from "../model/AppUser";
import {UserInfoDto} from "../model/UserInfoDto";
import "./LoginModul.css";




type LoginPageProps = {
    me: UserInfoDto | undefined;
    login: (username: string, password:string) => void;
    logout: () => void;
    register: (newAppUser: AppUser) => void;

}

export default function LoginModul (props: LoginPageProps) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const login = (event: FormEvent) => {
        event.preventDefault()
        props.login(username, password);
    }


    const logout = (event: FormEvent) => {
        event.preventDefault()

        setUsername("");
        setPassword("");
        props.logout();
    }


    function onChecked (changeEvent: ChangeEvent<HTMLInputElement>) {
        let passwordField = document.getElementById("floatingPassword");
        if (passwordField === null) {
            return;
        }
        let typeValue = changeEvent.target.checked ? "text" : "password";
        passwordField.setAttribute("type", typeValue);
    }


    return (
            <div>
                <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasRightLabel">Login</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">



                    { !props.me &&
                            <form className="px-4 py-3">
                                <div className="form-floating mb-3">
                                    <input type="text"
                                           className="form-control"
                                           id="floatingInput"
                                           name="username"
                                           value={username}
                                           placeholder="Username"
                                           onChange={event => setUsername(event.target.value)}
                                           required={true}
                                    />
                                        <label htmlFor="floatingInput">Username</label>
                                </div>
                                <div className="form-floating">
                                    <input type="password"
                                           className="form-control"
                                           id="floatingPassword"
                                           name="password"
                                           value={password}
                                           placeholder="Password"
                                           onChange={event => setPassword(event.target.value)}
                                           required={true}
                                    />
                                        <label htmlFor="floatingPassword">Password</label>
                                </div>

                                <div className="form-check  ">
                                    <input className="form-check-input1"
                                           id="flexCheckDefault"
                                           type="checkbox"
                                           onChange={onChecked}
                                           required={true}
                                    />
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Show password
                                        </label>
                                </div>
                                <div>
                                    <button className="btn btn-outline-success sign-in" style={{width: "13em", height: "2.5em"}} onClick={login}>
                                        <i className="bi bi-house-door" style={{ marginRight: "10px"}}></i>Sign in</button>
                                </div>



                                <div className="register">
                                     <p>New around here? Sign up</p>
                                     <RegisterModul register={props.register}/>
                                    <button type="button" className="btn btn-outline-info reg" data-bs-toggle="modal"   data-bs-target="#exampleModal"   style={{width: "13em", height: "2.5em"}} >
                                        <i className="bi bi-pencil-square" style={{ marginRight: "10px"}}></i>Registration
                                    </button>
                                </div>
                            </form>
                    }


                    { props.me &&
                            <div>
                                <form>
                                    <div className="greetings">
                                        <div style={{ color: "rgb(137 93 17)"}}>Herzlich willkommen zurück
                                            <h3 style={{color: "#16dbd6" }}>
                                                <i className="bi bi-emoji-sunglasses" style={{ marginRight: "10px" }}></i>
                                                {props.me.userName}!
                                            </h3>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-outline-warning" style={{width: "13em", height: "2.5em"}} onClick={logout}>
                                        <i className="bi bi-door-open" style={{ marginRight: "10px"}}></i>Sign out</button>
                                </form>
                            </div>
                    }
                     </div>
                </div>
            </div>
            )
}


