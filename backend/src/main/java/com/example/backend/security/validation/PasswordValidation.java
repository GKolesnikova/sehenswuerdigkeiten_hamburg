package com.example.backend.security.validation;
import java.util.ArrayList;
import java.util.List;



public class PasswordValidation {
    public static List<String> errorsPasswordValidation;
    public static String[] forbiddenList = { "123456", "Password123", "password123", "MeinPassword", "Password1",
            "Password2", "ABC1234", "abc123", "1q2w3e", "aa12345678", "123321", "0000000"};


    public static boolean isPasswordValidated ( String password ) {
        errorsPasswordValidation = new ArrayList <String> ();

        return !isForbidden(password)
                & isLongerThan7 ( password )
                & isContainsDigit ( password )
                & isContainsUppercase ( password )
                & isContainsLowercase ( password );
    }


    public  static boolean isForbidden ( String password ) {
        System.out.println( "333333");
        for ( String s : forbiddenList ) {
            if ( s.equals( password )) {
                errorsPasswordValidation.add ( "Your password is too simple" );
                return true;
            }
        }
        return false;
    }


    public static boolean isLongerThan7 ( String password ) {
        if ( password.length() > 7) {
            return true;
        }
        errorsPasswordValidation.add ( "Password must have at least 8 characters " );
        return false;
    }


    public static boolean isContainsDigit ( String password ) {
        char[] chars = password.toCharArray();
        for ( char c : chars ) {
            if ( Character.isDigit(c)) {
                return true;
            }
        }
        errorsPasswordValidation.add ( "Password must contain at least 1 digit" );
        return false;
    }


    public static boolean isContainsUppercase ( String password ) {
        if ( !password.equals( password.toLowerCase()) ) {
            return true;
        }
        errorsPasswordValidation.add ( "Password must contain at 1 capital letter" );
        return false;
    }


    public static boolean isContainsLowercase ( String password ) {
        if ( !password.equals( password.toUpperCase()) ) {
            return true;
        }
        errorsPasswordValidation.add ( "Password must contain at 1 lowercase letter" );
        return false;
    }
}
