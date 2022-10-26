package com.example.backend.service;
import com.example.backend.model.Sight;
import com.example.backend.repo.SightRepo;
import org.junit.jupiter.api.Test;
import java.util.List;
import static org.junit.jupiter.api.Assertions.assertEquals;
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
}

