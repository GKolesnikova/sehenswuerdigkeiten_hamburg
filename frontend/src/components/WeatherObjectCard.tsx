import {WeatherObject} from "../model/WeatherObject";
import "./WeatherObjectCard.css";


type WeatherObjectCardProps = {

    weatherObject: WeatherObject;
}

export default function WeatherObjectCard (props: WeatherObjectCardProps) {


    const getTimeFromTimestamp = (timestamp : number) => {
        let date = new Date(timestamp * 1000);

        let hours = date.getHours();
        let minutes = date.getMinutes();

        return  hours + ":" + minutes ;
    }


    const getDateFromTimestamp = (timestamp : number) => {
         let date = new Date(timestamp * 1000).toLocaleDateString('de-DE',{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' } );
        return date;
    }

    return (
        <div>
            <div className="row weather">
                <div className="col-6 weather-main-info">
                    <div className="row">
                        <div className="col-6">
                            <h2>{props.weatherObject.name}</h2>
                            <h1>{props.weatherObject.main.temp} °C</h1>
                            <p>Temperature feels like {props.weatherObject.main.feels_like} °C<i
                                className="bi bi-thermometer-half"></i></p>
                            <h6>{getDateFromTimestamp (props.weatherObject.dt)} </h6>

                        </div>

                        <div className="col-6">

                            <div>{props.weatherObject.weather.map((element) =>
                                <div key={Math.random()*16}>
                                    <img src={"http://openweathermap.org/img/wn/" + element.icon + "@2x.png"}  alt={"icon"}  />
                                    <p>{element.description}</p>
                                </div>
                            )}
                                <p><i className="bi bi-droplet"></i>Humidity: {props.weatherObject.main.humidity} %</p>


                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-6 weather-detail-info">
                    <div className="row">

                    <div className="col-6">


                    </div>
                    <div className="col-6">
                        <div><i className="bi bi-cloud-fog"></i>Cloudiness {props.weatherObject.clouds.all} %</div>

                        <div>Visibility is {props.weatherObject.visibility / 1000} km</div>

                        <div>Wind speed: {props.weatherObject.wind.speed} m/s</div>
                        <div style={{ margin: "2p% 0"}}>Atmospheric pressure: {props.weatherObject.main.pressure} hPa</div>

                        <div>
                            <span><i className="bi bi-brightness-alt-high" style={{ fontSize: "30px"}}></i> {getTimeFromTimestamp (props.weatherObject.sys.sunrise)}</span>
                            <span><i className="bi bi-brightness-alt-low" style={{ fontSize: "30px"}}></i> {getTimeFromTimestamp (props.weatherObject.sys.sunset)}</span>
                        </div>


                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}