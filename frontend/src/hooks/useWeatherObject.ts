import {useEffect, useState} from "react";
import {WeatherObject} from "../model/WeatherObject";
import axios from "axios";
import {toast} from "react-toastify";

export default function UseWeatherObject () {

    const [ weatherObject, setWeatherObject ] = useState <WeatherObject | undefined>();

    useEffect ( () => {
       getWeatherObject()
    }, [])

    const getWeatherObject = () => {
        axios.get("/api/weather")
            .then(response => response.data)
            .then((data) => setWeatherObject(data))
            .then(() => toast.success("Weather loaded"))
            .catch((error) => toast.error("Failed weather data: " + error.message + " " + error.response.status + " " + error.response.data))
    }

    return { weatherObject, getWeatherObject  }
}