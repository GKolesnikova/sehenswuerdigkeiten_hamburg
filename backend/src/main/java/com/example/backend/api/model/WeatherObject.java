package com.example.backend.api.model;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.List;



@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class WeatherObject {

     private List <Weather> weather;
     private Main main;
     private int visibility;
     private Wind wind;
     private Clouds clouds;
     private int dt;
     private Sys sys;
     private String name;

}
