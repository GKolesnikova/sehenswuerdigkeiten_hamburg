package com.example.backend.api.model;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Main {

    private float temp;
    private float feels_like;
    private int pressure;
    private int humidity;
}
