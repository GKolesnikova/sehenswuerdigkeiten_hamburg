package com.example.backend.service;
import com.example.backend.model.Sight;
import com.example.backend.model.SightDTO;
import com.example.backend.repo.SightRepo;
import org.junit.jupiter.api.Test;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;


class SightServiceTest {

    private final SightRepo sightRepo = mock(SightRepo.class);
    private final IdService idService = mock(IdService.class);
    private final SightService sightService = new SightService(sightRepo, idService);




    @Test
    void getAllSight() {
        // GIVEN
        when(sightRepo.findAll()).thenReturn(List.of(
                new Sight("1","AAA", "BBB", "CCC", "DDD", "EEE", "HHH", "TTT"),
                new Sight("2","OOO", "KKK", "FFF", "VVV", "SSS", "ZZZ", "WWW"))
        );

        // WHEN
        List<Sight> actual = sightService.getAllSight();

        // THEN
        List<Sight> expected = List.of(
                new Sight("1","AAA", "BBB", "CCC", "DDD", "EEE", "HHH", "TTT"),
                new Sight("2","OOO", "KKK", "FFF", "VVV", "SSS", "ZZZ", "WWW")
        );
        verify(sightRepo).findAll();
        assertEquals(actual, expected);
    }



    @Test
    void getSightById_whenExists_ReturnSight() {
        // GIVEN
        when(sightRepo.findById("1")).thenReturn(Optional.ofNullable(new Sight("1","AAA", "BBB", "CCC", "DDD", "EEE", "HHH", "TTT")));

        // WHEN
        Sight actual = sightService.getSightById("1");

        // THEN
        Sight expected = new Sight("1","AAA", "BBB", "CCC", "DDD", "EEE", "HHH", "TTT");
        verify(sightRepo).findById("1");
        assertEquals(actual, expected);
    }



    @Test
    void getSightById_whenSightNotExists_throwException() {
        // GIVEN
        when(sightRepo.findById("1")).thenReturn( Optional.empty());

        // WHEN & THEN
        assertThrows(NoSuchElementException.class, () -> sightService.getSightById("1"));
        verify(sightRepo).findById("1");
    }


    @Test
    void addNewSight_whenSightDTO () {
        // GIVEN
        SightDTO sightDTO = new SightDTO("AAA", "BBB", "CCC", "DDD", "EEE", "HHH", "TTT");
        when(idService.generateID()).thenReturn("1");
        when(sightRepo.save(any())).thenReturn(Sight.builder()
                .id("1")
                .name(sightDTO.getName())
                .image(sightDTO.getImage())
                .address(sightDTO.getAddress())
                .website(sightDTO.getWebsite())
                .time(sightDTO.getTime())
                .description(sightDTO.getDescription())
                .location(sightDTO.getLocation())
                .build());

        // WHEN
        Sight actual = sightService.addNewSight(sightDTO);

        // THEN
        Sight expected = new Sight("1","AAA", "BBB", "CCC", "DDD", "EEE", "HHH", "TTT");
        verify(sightRepo).save( any());
        assertEquals(actual, expected);
    }



    @Test
    void deleteSight_whenSightExists () {
        // GIVEN
        when(sightRepo.findById("1")).thenReturn(Optional.ofNullable(new Sight("1","AAA", "BBB", "CCC", "DDD", "EEE", "HHH", "TTT")));

        // WHEN
        boolean actual = sightService.deleteSightById("1");

        // THEN
        verify(sightRepo).deleteById("1");
        assertTrue(actual);
        assertFalse(sightRepo.existsById("1"));
    }



     @Test
     void deleteSight_whenSightDoesNotExists () {
         // GIVEN

         // WHEN
         boolean actual = sightService.deleteSightById("1");

         // THEN
         verify(sightRepo, never()).deleteById("1");
         assertFalse(actual);
     }
}

