package com.example.backend.model;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class SightDTO {

    private String name;
    private String image1;
    private String image2;
    private String image3;
    private String address;
    private String website;
    private String time;
    private String description;
    private String location;

}
