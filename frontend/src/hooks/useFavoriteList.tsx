import {useEffect, useState} from "react";
import {FavoriteList} from "../model/FavoriteList";
import axios from "axios";
import {toast} from "react-toastify";



export default function useFavoriteList () {

    let favoriteList! : FavoriteList;

    const [favoriteLists, setfavoriteLists] = useState <FavoriteList[]> ([]);

    useEffect(() => {
        getAllFavoriteListe()
    }, [])

    const getAllFavoriteListe = () => {
        axios.get("/api/favorites")
            .then(response => response.data)
            .then(data => setfavoriteLists(data))
            .catch(console.error)
    }

    const getFavoriteList = (favoriteListId: string | undefined) => {
        axios.get("/api/favorites/" + favoriteListId)
            .then(response => response.data)
            .then(data => setfavoriteLists(data))
            .catch((error) => toast.error(error.message + " " + error.response.status + " " + error.response.data))
    }

    const addNewSightInFavoriteListe = (favoriteListId: string | undefined, sightId: string | undefined) => {
        axios.post("/api/favorites/" + favoriteListId + "/" + sightId)
            .then(response => response.data)
            .then(() => toast.success("New Sight added to favorite list"))
            .catch((error) => toast.error(error.message + " " + error.response.status + " " + error.response.data))
            .then(getAllFavoriteListe)
    }

    function deleteFavoriteList (favoriteListId: string | undefined) {
        axios.delete("/api/favorites/" + favoriteListId)
            .then(() => toast.success("Favorite list is deleted"))
            .catch(console.error)
            .then(() => getAllFavoriteListe())
            .catch((error) => toast.error(error.message + " " + error.response.status + " " + error.response.data))
    }

    function deleteSightFromFavoriteListe (favoriteListId: string | undefined, sightId: string | undefined) {
        axios.delete("/api/favorites/" + favoriteListId + "/" + sightId)
            .then(() => toast.success("Sight from favorite list is deleted"))
            .catch(console.error)
            .then(() => getAllFavoriteListe())
            .catch((error) => toast.error(error.message + " " + error.response.status + " " + error.response.data))

    }

    return { favoriteList, favoriteLists, getAllFavoriteListe, getFavoriteList, addNewSightInFavoriteListe, deleteFavoriteList, deleteSightFromFavoriteListe }


}