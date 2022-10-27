package com.example.backend.controller;
import com.example.backend.model.Sight;
import com.example.backend.repo.SightRepo;
import com.example.backend.service.IdService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@SpringBootTest
@DirtiesContext(classMode = DirtiesContext.ClassMode.AFTER_EACH_TEST_METHOD)
@AutoConfigureMockMvc
class SightControllerTest {


    @Autowired
    MockMvc mockMvc;

    @Autowired
    private SightRepo sightRepo;

    @MockBean
    private IdService idService;




    @Test
    void getAllSight() throws Exception {
        // GIVEN
        sightRepo.save( new Sight("1","AAA", "BBB", "CCC", "DDD", "EEE", "HHH", "TTT"));
        sightRepo.save( new Sight("2","OOO", "KKK", "FFF", "VVV", "SSS", "ZZZ", "WWW"));


        //WHEN & THEN
        String expectedJSON = """
                [
                    {
                        "id": "1",                               
                        "name": "AAA",
                        "image": "BBB",
                        "address": "CCC",
                        "website": "DDD",
                        "time": "EEE",
                        "description": "HHH",
                        "location": "TTT"                                         
                     },
                     {
                        "id": "2",                               
                        "name": "OOO",
                        "image": "KKK",
                        "address": "FFF",
                        "website": "VVV",
                        "time": "SSS",
                        "description": "ZZZ",
                        "location": "WWW"                          
                     }
                 ]
                """;


        mockMvc.perform(
                        get("/api/sights"))
                .andExpect(status().is(200))
                .andExpect(content().json(expectedJSON));
    }



    @Test
    void getAllSight_whenSuccessful_Return200 () throws Exception {

        mockMvc.perform(
                        get("/api/sights")
                .contentType("application/json"))
                .andExpect(status().isOk()).andReturn();
    }



    @Test
    void getSightById_whenExists_ReturnSight () throws Exception {
        // GIVEN
        sightRepo.save( new Sight("1","AAA", "BBB", "CCC", "DDD", "EEE", "HHH", "TTT"));
        sightRepo.save( new Sight("2","OOO", "KKK", "FFF", "VVV", "SSS", "ZZZ", "WWW"));

        //WHEN & THEN
        String expectedJSON = """
                    {
                        "id": "1",                               
                        "name": "AAA",
                        "image": "BBB",
                        "address": "CCC",
                        "website": "DDD",
                        "time": "EEE",
                        "description": "HHH",
                        "location": "TTT"                                         
                     }               
                """;


        mockMvc.perform(
                        get("/api/sights/1"))
                .andExpect(status().isOk())
                .andExpect(content().json(expectedJSON));
    }



    @Test
    void getSightById_whenSightNotExists_Return404 () throws Exception {

        mockMvc.perform(
                        get("/api/sights/17690"))
                 .andExpect(status().is(404));
    }



    @Test
    void deleteSightById () throws Exception {
        // GIVEN
        sightRepo.save( new Sight("1","AAA", "BBB", "CCC", "DDD", "EEE", "HHH", "TTT"));

        //WHEN & THEN
        mockMvc.perform(
                        delete("/api/sights/1"))
                .andExpect(status().is(200));
    }
}


