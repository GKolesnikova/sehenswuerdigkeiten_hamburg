import {useEffect, useState} from "react";
import {Sight} from "../model/Sight";
import axios from "axios";
import React from 'react';
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



export default function useSights () {


    const [sights, setSights] = useState<Sight[]>([]);

    useEffect(() => {
        getAllSights()
    }, [])

    const getAllSights = () => {
        axios.get("/api/sights/get-all")
            .then(response => response.data)
            .then(data => setSights(data))
            .catch((error) => toast.error(error.message + " " + error.response.status + " " + error.response.data))
    }






    return {sights, getAllSights}
}