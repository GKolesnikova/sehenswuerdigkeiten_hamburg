import {useEffect, useState} from "react";
import {Sight} from "../model/Sight";
import axios from "axios";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



export default function useSights () {

    let sight! : Sight;
    const [sights, setSights] = useState<Sight[]>([]);

    useEffect(() => {
        getAllSights()
    }, [])

    const getAllSights = () => {
        axios.get("/api/sights")
             .then(response => response.data)
             .then(data => setSights(data))
             .catch((error) => toast.error(error.message + " " + error.response.status + " " + error.response.data))
    }


    const getSightById = (id: string | undefined) => {
        axios.get("/api/sights/" + id)
             .then(response => response.data)
             .then(data => setSights(data))
             .catch((error) => toast.error(error.message + " " + error.response.status + " " + error.response.data))
    }

    const addNewSight = (newSight: Sight) => {
        axios.post("/api/sights", newSight)
             .then(response => response.data)
             .then(getAllSights)
             .catch((error) => toast.error(error.message + " " + error.response.status + " " + error.response.data))
    }

    const updateSight = (id: string | undefined, sight: Sight) => {
        axios.put("/api/sights/" + id, sight)
             .then(response => response.data)
             .then(getAllSights)
             .catch((error) => toast.error(error.message + " " + error.response.status + " " + error.response.data))
    }


    function deleteSightById (id: string | undefined) {
        axios.delete("/api/sights/" + id)
             .then(() => getAllSights())
             .catch(console.error)
    }


    return {sight, sights, getAllSights, getSightById, addNewSight, updateSight, deleteSightById}
}