export type WeatherObject = {

    weather: Array<Weather>;
    main: {
        temp: number,
        feels_like: number,
        pressure: number,
        humidity: number,
    };
    visibility: number;
    wind: {
        speed: number
    };
    clouds: {
        all: number
    };
    dt: number;
    sys: {
        sunrise: number,
        sunset: number
    },
    name: string;
}



type Weather = {
     description: string;
    icon: string

}


