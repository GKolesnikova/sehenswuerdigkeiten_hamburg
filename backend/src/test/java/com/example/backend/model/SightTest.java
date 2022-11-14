package com.example.backend.model;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;


public class SightTest {

    @Test
    void testEquals_whenDifferentSights_returnFalse () {
        // GIVEN
        Sight sight1 = new Sight("1","AAA", "BBB1", "BBB2", "BBB3","CCC", "DDD", "EEE", "HHH", "TTT");
        Sight sight2 = new Sight("2","OOO", "KKK1", "KKK2", "KKK3", "FFF", "VVV", "SSS", "ZZZ", "WWW");

        //WHEN
        boolean actual = sight1.equals(sight2);

        //THEN
        assertEquals(false, actual);

    }

    @Test
    void testEquals_whenSameSights_returnTrue () {
        // GIVEN
        Sight sight1 = new Sight("1","AAA", "BBB1", "BBB2", "BBB3","CCC", "DDD", "EEE", "HHH", "TTT");
        Sight sight2 = new Sight("1","AAA", "BBB1", "BBB2", "BBB3","CCC", "DDD", "EEE", "HHH", "TTT");

        //WHEN
        boolean actual = sight1.equals(sight2);

        //THEN
        assertEquals(true, actual);

    }


}
