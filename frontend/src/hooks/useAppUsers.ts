import {useEffect, useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";
import {AppUser} from "../model/AppUser";
import {UserInfoDto} from "../model/UserInfoDto";



export default function useAppUsers () {

     const [me, setMe] = useState<UserInfoDto | undefined>();


       useEffect(() => {
            const loggedInUser = localStorage.getItem("user");
            if (loggedInUser) {
                const foundUser = JSON.parse(loggedInUser);
                setMe(foundUser);
            }
        }, []);



    const login = (username: string, password:string) => {
        axios.get("api/user/login", {auth: {username, password}})
            .then( response => response.data)
            .then((data) => { setMe(data); localStorage.setItem('user',JSON.stringify(data).toString());})
            .then(() => toast.success("You have successfully logged in as " + username))
            .catch(() => alert( "Sorry! Wrong user or password"));
    }


    const logout = () => {
        axios.get("api/user/logout")
            .then(() => {setMe(undefined); localStorage.clear()})
            .then(() => toast.info("You have successfully logged out"))
            .catch((error) => toast.error("Logout was wrong!" + error.message + " " + error.response.status + " " + error.response.data))
    }


    function register (newAppUser:  AppUser) {
        axios.post("api/user/register",   newAppUser)
             .then( response => response.data)
             .then((data) => { setMe(data); localStorage.setItem('user',JSON.stringify(data).toString());})
             .then(() => toast.success("You have successfully registed"  ))
             .catch((error) => toast.error( "Wrong registration " + error.message + " " + error.response.status + " " + error.response.data))
    }


    const addNewSightToFavoriteListUser = (appUserId: string, sightId: string | undefined) => {
        axios.post("/api/user/" + appUserId + "/" + sightId)
             .then(response => response.data)
             .then((data) => setMe(data))
             .then(() => toast.success("New Sight added to favorite list"))
             .catch((error) => toast.error(error.message + " " + error.response.status + " " + error.response.data))
    }


    function deleteSightFromFavoriteListeUser (appUserId: string, sightId: string | undefined) {
        axios.delete("/api/user/" + appUserId + "/" + sightId)
            .then(response => response.data)
            .then(() => toast.success("Sight from favorite list is deleted"))
            .catch((error) => toast.error(error.message + " " + error.response.status + " " + error.response.data))
    }




    return { me, login, logout, register, addNewSightToFavoriteListUser, deleteSightFromFavoriteListeUser}
}