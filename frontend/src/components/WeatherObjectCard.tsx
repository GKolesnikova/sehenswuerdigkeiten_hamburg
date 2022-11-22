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

    const getRoundedValue = (value : number) => {
        return Math.round(value);
    }

    return (
        <div>
            <div className="row weather">
                <div className="col-6 weather-main-info">

                    <div className="row">
                        <div className="col-6">
                            <h2 style={{color: "#02bbde"}}>{props.weatherObject.name}</h2>
                            <h1 style={{color: "#ffbb05"}}>{getRoundedValue(props.weatherObject.main.temp)} °C</h1>
                            <p style={{color: "rgb(137 93 17)"}}>It feels like {getRoundedValue(props.weatherObject.main.feels_like)} °C<i
                                className="bi bi-thermometer-half" style={{ marginRight: "10px"}}></i></p>
                            <h6 style={{color: "rgb(86 47 10)"}}>{getDateFromTimestamp (props.weatherObject.dt)} </h6>
                        </div>

                        <div className="col-6">
                            <div>{props.weatherObject.weather.map((element) =>
                                <div key={Math.random()*16}>
                                    <img src={"http://openweathermap.org/img/wn/" + element.icon + "@2x.png"}  alt={"icon"}   />
                                    <p style={{color: "rgb(137 93 17)"}}>{element.description}</p>
                                </div>
                            )}
                                <p style={{color: "rgb(137 93 17)"}}><i className="bi bi-droplet" style={{ marginRight: "10px", color: "#00bbde"}}></i>Humidity: {props.weatherObject.main.humidity} %</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6 weather-detail-info">
                    <div className="row">

                        <div className="col-6">
                            <img src={"https://a.cdn-hotels.com/gdcs/production19/d1430/c53e41bd-1e9b-4c80-b15b-01e81b1c4679.jpg?impolicy=fcrop&w=800&h=533&q=medium"}  alt={"Himmel"} style={{height: "180px", width:"200px"}}/>
                        </div>

                        <div className="col-6 text-start ">
                            <div style={{color: "rgb(137 93 17)"}}><i className="bi bi-cloud-fog" style={{ marginRight: "10px", color: "rgb(2 187 223)"}}></i>Cloudiness: {props.weatherObject.clouds.all} %</div>

                            <div style={{color: "rgb(137 93 17)"}}><i className="bi bi-eye" style={{ marginRight: "10px", color: "rgb(2 187 223)"}}></i>Visibility is {props.weatherObject.visibility / 1000} km</div>

                            <div style={{color: "rgb(137 93 17)"}}><i className="bi bi-wind" style={{ marginRight: "10px", color: "rgb(2 187 223)"}}></i>Wind speed: {props.weatherObject.wind.speed} m/s</div>
                            <div style={{ margin: "2p% 0", color: "rgb(137 93 17)"}}><i className="bi bi-arrow-down"  style={{ marginRight: "10px", color: "rgb(2 187 223)"}}></i>Atm. pressure: {props.weatherObject.main.pressure} hPa</div>

                            <div>
                                <span style={{color: "rgb(86 47 10)"}}><i className="bi bi-brightness-alt-high" style={{ fontSize: "30px", color: "rgb(255 187 5)"}}></i> {getTimeFromTimestamp (props.weatherObject.sys.sunrise)}</span>
                                <span style={{color: "rgb(86 47 10)"}}><i className="bi bi-brightness-alt-low" style={{ fontSize: "30px", color: "rgb(255 187 5)"}}></i> {getTimeFromTimestamp (props.weatherObject.sys.sunset)}</span>
                            </div>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    )
}