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
            /*.catch((error) => setWeatherObject(  {
                    "weather": [
                        {
                            "description": "overcast clouds",
                            "icon": "04d"
                        }
                    ],
                    "main": {
                        "temp": 8.48,
                        "feels_like": 4.9,
                        "pressure": 1016,
                        "humidity": 79,
                    },
                    "visibility": 10000,
                    "wind": {
                        "speed": 7.3,
                    },
                    "clouds": {
                        "all": 100
                    },
                    "dt": 1647347424,
                    "sys": {
                        "sunrise": 1647325488,
                        "sunset": 1647367827
                    },
                    "name": "Newtonhill",
                }
            ))*/
    }

    return { weatherObject, getWeatherObject  }
}