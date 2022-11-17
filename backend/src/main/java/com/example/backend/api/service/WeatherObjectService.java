package com.example.backend.api.service;
import com.example.backend.api.model.WeatherObject;
import com.example.backend.exception.ApiWeatherObjectException;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;


@Service
public class WeatherObjectService {

    WebClient webClient = WebClient.create("https://api.openweathermap.org/data/2.5/weather");

    @Value("${WEATHER_API_KEY}")
    public String WEATHER_API_KEY;


    public WeatherObject getWeatherObject() {

        WeatherObject apiWeatherObjectResponse = webClient.get()
                .uri("?id=2911298&lang=de&appid=" + WEATHER_API_KEY + "&units=metric")
                .header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                .retrieve()
                .toEntity(WeatherObject.class)
                .block()
                .getBody();

        if ( apiWeatherObjectResponse == null) {
            throw new ApiWeatherObjectException("Problems while calling weather object API. Nothing could be found");
        }

        return apiWeatherObjectResponse;
    }
}
