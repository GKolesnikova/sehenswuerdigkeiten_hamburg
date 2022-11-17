package com.example.backend.exception;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import java.time.LocalDateTime;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.NoSuchElementException;


@ControllerAdvice
public class ControllerAdvisor {

    @ExceptionHandler(NoSuchElementException.class)
    protected ResponseEntity<Object> handleConflict (NoSuchElementException exception) {
        return ResponseEntity
                .status(HttpStatus.NOT_FOUND)
                .body("Element not found! Error:  " +  exception.getMessage());
    }


    @ExceptionHandler (value = PasswordValidationException.class)
    public ResponseEntity handlePasswordValidationException ( PasswordValidationException exception ) {
        return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .body( "Errors for your password: " + exception.getMessage());
    }

    @ExceptionHandler (value = ApiWeatherObjectException.class)
    public ResponseEntity handlePasswordValidationException ( ApiWeatherObjectException exception ) {
        return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .body( "Errors for your password: " + exception.getMessage());
    }


    @ExceptionHandler(IllegalArgumentException.class)
    protected ResponseEntity<Object> handleConflict (IllegalArgumentException exception) {
        return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .body("Given element not processable! Error:  " +  exception.getMessage());
    }

    @ExceptionHandler(Exception.class)
    protected ResponseEntity<Object> handleConflict (Exception exception) {
        return ResponseEntity
                .status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body("Server error:  " +  exception.getMessage());
    }
}
