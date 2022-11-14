package com.example.backend.security.model;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;



public class PasswordHelper {
    public static void main(String[] args) {

        System.out.println( new BCryptPasswordEncoder().encode("AAA"));
    }
}
