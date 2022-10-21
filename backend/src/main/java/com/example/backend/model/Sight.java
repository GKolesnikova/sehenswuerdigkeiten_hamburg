package com.example.backend.model;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "sights")
public class Sight {

    @Id
    private String id;

    private String name;
    private String image;
    private String adresse;
    private String webseite;
    private String uhrzeit;
    private String beschreibung;
    private String lokation;

}
