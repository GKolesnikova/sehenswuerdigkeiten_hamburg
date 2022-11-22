package com.example.backend.exception;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;


@ResponseStatus( value = HttpStatus.BAD_REQUEST)
public class ApiWeatherObjectException extends RuntimeException {
    public ApiWeatherObjectException ( String message ) {

        super (message );
    }
}
