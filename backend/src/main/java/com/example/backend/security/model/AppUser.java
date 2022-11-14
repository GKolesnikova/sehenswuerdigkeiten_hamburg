package com.example.backend.security.model;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.List;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "appusers")
public class AppUser {

    @Id
    private String id;

    private String userName;
    private String passwordHash;
    private String userFirstName;
    private String userLastName;
    private String eMail;
    private String address;
    private String city;
    private List<String> roles = List.of();
    private List<String> favoriteSightsIds = List.of();

}
