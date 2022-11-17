package com.example.backend.exception;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;


@ResponseStatus( value = HttpStatus.BAD_REQUEST)
public class PasswordValidationException extends SecurityException {
   public PasswordValidationException ( String errorsPasswordValidation ) {

       super (errorsPasswordValidation );
   }
}
