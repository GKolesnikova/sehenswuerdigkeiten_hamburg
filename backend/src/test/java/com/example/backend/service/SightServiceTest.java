package com.example.backend.service;
import com.example.backend.model.Sight;
import com.example.backend.repo.SightRepo;
import org.junit.jupiter.api.Test;
import java.util.ArrayList;
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
        Sight sight1 = new Sight("1","AAA", "BBB", "CCC", "DDD", "EEE", "HHH", "TTT");
        Sight sight2 = new Sight("2","OOO", "KKK", "FFF", "VVV", "SSS", "ZZZ", "WWW");

        List<Sight> sightList = new ArrayList<>(List.of(sight1, sight2));
        when(sightRepo.findAll()).thenReturn(sightList);

        //WHEN
        List<Sight> actual = sightService.getAllSight();

        //THEN
        List<Sight> expected = List.of(sight1, sight2);
        verify(sightRepo).findAll();
        assertEquals(actual, expected);


    }
}

