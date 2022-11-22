import LoginModul from "./LoginModul";
import "./NavBar.css";
import React from "react";
import {AppUser} from "../model/AppUser";
import {UserInfoDto} from "../model/UserInfoDto";
import isAdmin from "./IsAdmin";



type NavBarProps = {
    me: UserInfoDto | undefined;
    login: (username: string, password:string) => void;
    logout: () => void;
    register: (newAppUser: AppUser) => void;

}

export default function NavBar ( props: NavBarProps ) {


    return (
        <div >
            <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4">
                        <ul className="nav justify-content-center " style={{padding:"1% 0"}}>

                        <li className="nav-item" >
                            <a className="nav-link active"  href={"/#/homepage"} style={{color: "#0d6efd", fontSize:"1.2em"}}>Homepage</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/" style={{color: "#0d6efd", fontSize:"1.2em"}}>Sights</a>
                        </li>

                            {isAdmin(props.me) &&
                                <li className="nav-item">
                                    <a className="nav-link" href="/#/form"
                                       style={{color: "#0d6efd", fontSize: "1.2em"}}>Add new Sight</a>
                                </li>
                            }


                        </ul>
                    </div>
                    <div className="col-4" style={{ display: "flex", flexDirection: "column", justifyContent: "center"}}>
                        <div className=" " style={{ alignSelf: "flex-end", paddingRight: "4em"}}>
                            <LoginModul me={props.me}  login={props.login} logout={props.logout} register={props.register}/>
                            <button className="btn btn-outline-info login " style={{width: "13em", height: "2.5em"}} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
                                    aria-controls="offcanvasRight">Login
                            </button>
                        </div>
                    </div>
            </div>


            <div className={"app-fotos row"} style={{height: "370px", border: "10px solid #fffb50"}} >
                <img className={"col-6 p-0"} src={"/images/main_page/hamburg1.jpeg"} alt={"Logo Hamburg 1"} style={{height: "inherit"}} />
                <img className={"col-6 p-0"} src={process.env.PUBLIC_URL + "/images/main_page/hamburg2.jpeg"} alt={"Logo Hamburg 2"} style={{height: "inherit"}}/>
            </div>
            <div className="willkommen"  ><h1>Herzlich willkommen in Hamburg!</h1></div>
        </div>
    )
}

