package com.example.backend.security.model;
import lombok.Data;



@Data
public class CreateUserDto {

    private String userName;
    private String password;
    private String userFirstName;
    private String userLastName;
    private String eMail;
    private String address;
    private String city;

}
