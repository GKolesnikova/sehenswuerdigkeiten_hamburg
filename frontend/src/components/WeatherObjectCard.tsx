import {WeatherObject} from "../model/WeatherObject";
import "./WeatherObjectCard.css";


type WeatherObjectCardProps = {

    weatherObject: WeatherObject;
}

export default function WeatherObjectCard (props: WeatherObjectCardProps) {


    const getDateAndTimeFromTimestamp = (timestamp : number) => {
        let date = new Date(timestamp * 1000);

        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();

        return  hours + ":" + minutes + ":" + seconds;
    }


    return (
        <div>
            <div className="row weather">
                <div className="col-6 weather-main-info">
                    <div className="row">
                        <div className="col-6">
                            <p>{props.weatherObject.name}</p>
                            <p>Temperature: {props.weatherObject.main.temp} °C</p>
                            <p>It feels like {props.weatherObject.main.feels_like} °C</p>

                        </div>

                        <div className="col-6">
                            <div>{props.weatherObject.weather.map((element) =>
                                <div key={Math.random()*16}>
                                    <img src={"http://openweathermap.org/img/wn/" + element.icon + "@2x.png"} />
                                    <p>{element.description}</p>
                                </div>
                            )}
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-6 weather-detail-info">
                    <div className="row">

                    <div className="col-6">

                        <p>Atmospheric pressure: {props.weatherObject.main.pressure} hPa</p>
                        <p>Humidity: {props.weatherObject.main.humidity} %</p>

                        <p>Visibility is {props.weatherObject.visibility / 1000} km</p>

                        <p>Wind speed: {props.weatherObject.wind.speed} m/s</p>


                    </div>
                    <div className="col-6">

                        <p>Cloudiness {props.weatherObject.clouds.all} %</p>

                        <p>Sunrise time: {getDateAndTimeFromTimestamp (props.weatherObject.sys.sunrise)}</p>
                        <p>Sunset time: {getDateAndTimeFromTimestamp (props.weatherObject.sys.sunset)}</p>


                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}