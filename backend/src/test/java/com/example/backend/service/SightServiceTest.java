package com.example.backend.service;
import com.example.backend.model.Sight;
import com.example.backend.repo.SightRepo;
import org.junit.jupiter.api.Test;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;


class SightServiceTest {

    private final SightRepo sightRepo = mock(SightRepo.class);
    private final IdService idService = mock(IdService.class);
    private final SightService sightService = new SightService(sightRepo, idService);




    @Test
    void getAllSight() {
        //GIVEN
        when(sightRepo.findAll()).thenReturn(List.of(
                new Sight("1","AAA", "BBB", "CCC", "DDD", "EEE", "HHH", "TTT"),
                new Sight("2","OOO", "KKK", "FFF", "VVV", "SSS", "ZZZ", "WWW"))
        );
        //WHEN
        List<Sight> actual = sightService.getAllSight();

        //THEN
        List<Sight> expected = List.of(
                new Sight("1","AAA", "BBB", "CCC", "DDD", "EEE", "HHH", "TTT"),
                new Sight("2","OOO", "KKK", "FFF", "VVV", "SSS", "ZZZ", "WWW")
        );
        verify(sightRepo).findAll();
        assertEquals(actual, expected);
    }


    @Test
    void deleteSight_whenSightExists () {
        //GIVEN
        when(sightRepo.findById("1")).thenReturn(Optional.ofNullable(new Sight("1","AAA", "BBB", "CCC", "DDD", "EEE", "HHH", "TTT")));

        //WHEN
        boolean actual = sightService.deleteSightById("1");

        //THEN
        boolean expected = true;
        verify(sightRepo).deleteById("1");
        assertTrue(sightService.deleteSightById("1"));
        assertEquals(actual, expected);
    }


     @Test
     void deleteSight_whenSightDoesNotExists () {
         //GIVEN

         //WHEN
         boolean actual = sightService.deleteSightById("1");

         //THEN
         boolean expected = false;
         verify(sightRepo, never()).deleteById("1");
         assertFalse(sightService.deleteSightById("1"));
         assertEquals(actual, expected);

     }





}

