package com.example.backend.api.controller;
import com.example.backend.api.model.WeatherObject;
import com.example.backend.api.service.WeatherObjectService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@RestController
@RequestMapping("/api/weather")
public class WeatherObjectController {

    private  final WeatherObjectService weatherObjectService;


    public WeatherObjectController(WeatherObjectService weatherObjectService) {
        this.weatherObjectService = weatherObjectService;
    }

    @GetMapping
    public WeatherObject getWeatherObject () {
        return weatherObjectService.getWeatherObject();
    }
}
