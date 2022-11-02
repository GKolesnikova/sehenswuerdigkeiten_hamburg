package com.example.backend.controller;
import com.example.backend.model.Sight;
import com.example.backend.repo.SightRepo;
import com.example.backend.service.IdService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;
import java.util.List;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.containsInAnyOrder;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
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


        // WHEN & THEN
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

        List <Sight> sightsList = sightRepo.findAll();
        assertThat(sightsList, containsInAnyOrder(
                new Sight("1","AAA", "BBB", "CCC", "DDD", "EEE", "HHH", "TTT"),
                new Sight("2","OOO", "KKK", "FFF", "VVV", "SSS", "ZZZ", "WWW")
        ));
    }



    @Test
    void getAllSight_whenSuccessful_Return200 () throws Exception {
        // GIVEN

        //WHEN & THEN
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

        // WHEN & THEN
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
        // GIVEN

        // WHEN & THEN
        mockMvc.perform(
                        get("/api/sights/17690"))
                 .andExpect(status().is(404));
    }



    @Test
    void addNewSight () throws Exception {
        // GIVEN
        when(idService.generateID()).thenReturn("1");

        // WHEN & THEN
        mockMvc.perform(
                        post("/api/sights")
                .header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                .content("""
                    {                                                   
                        "name": "AAA",
                        "image": "BBB",
                        "address": "CCC",
                        "website": "DDD",
                        "time": "EEE",
                        "description": "HHH",
                        "location": "TTT"                                         
                     }               
                """))
                .andExpect(status().is(200))
                .andExpect(content().json("""
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
                """));

        List <Sight> sightsList = sightRepo.findAll();
        assertThat(sightsList, containsInAnyOrder(
                new Sight("1","AAA", "BBB", "CCC", "DDD", "EEE", "HHH", "TTT")
         ));
    }



    @Test
    void addNewSight_whenSuccessful_Return200 () throws Exception {
        // GIVEN
        when(idService.generateID()).thenReturn("1");

        // WHEN & THEN
        mockMvc.perform(
                        post("/api/sights")
                .contentType("application/json")
                .content("""
                    {                                                   
                        "name": "AAA",
                        "image": "BBB",
                        "address": "CCC",
                        "website": "DDD",
                        "time": "EEE",
                        "description": "HHH",
                        "location": "TTT"                                         
                     }               
                """))
                .andExpect(status().is(200)).andReturn();
    }



   @Test
    void addNewSight_whenMissingOneOfRequiredForm_returns400 () throws Exception {
        // GIVEN
        when(idService.generateID()).thenReturn("1");

        // WHEN & THEN
        mockMvc.perform(
                        post("/api/sights")
                .header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                .content("""
                    {       
                        "image": "BBB",
                        "address": "CCC",
                        "website": "DDD",
                        "time": "EEE",
                        "description": "HHH",
                        "location": "TTT"                                         
                     }               
                """))
                .andExpect(status().is(400)).andReturn();
    }



    @Test
    void updateSight_returnUpdatedSight () throws Exception {
        // GIVEN
        sightRepo.save( new Sight("1","AAA", "BBB", "CCC", "DDD", "EEE", "HHH", "TTT"));
        sightRepo.save( new Sight("2","OOO", "KKK", "FFF", "VVV", "SSS", "ZZZ", "WWW"));

        // WHEN & THEN
        mockMvc.perform(
                        put("/api/sights/1")
                                .header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                                .content("""
                    {     
                        "id": "1",                                               
                        "name": "222",
                        "image": "333",
                        "address": "444",
                        "website": "555",
                        "time": "666",
                        "description": "777",
                        "location": "888"                                         
                     }               
                """))
                .andExpect(status().is(200))
                .andExpect(content().json("""
                    {
                        "id": "1",                               
                        "name": "222",
                        "image": "333",
                        "address": "444",
                        "website": "555",
                        "time": "666",
                        "description": "777",
                        "location": "888"                                         
                     }               
                """));


        List <Sight> sightsList = sightRepo.findAll();
        assertThat(sightsList, containsInAnyOrder(
                new Sight("1","222", "333", "444", "555", "666", "777", "888"),
                new Sight("2","OOO", "KKK", "FFF", "VVV", "SSS", "ZZZ", "WWW")
        ));
    }



    @Test
    void updateSight_whenIdNotExists_Return404 () throws Exception {
        // GIVEN

        // WHEN & THEN
        mockMvc.perform(
                        put("/api/sights/17690")
                .header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                .content("""
                   {     
                                                               
                     }                                   
                """))
                .andExpect(status().is(404));
    }


    @Test
    void deleteSightById () throws Exception {
        // GIVEN
        sightRepo.save( new Sight("1","AAA", "BBB", "CCC", "DDD", "EEE", "HHH", "TTT"));
        sightRepo.save( new Sight("2","OOO", "KKK", "FFF", "VVV", "SSS", "ZZZ", "WWW"));


        // WHEN & THEN
        mockMvc.perform(
                        delete("/api/sights/1"))
                .andExpect(status().is(200));

        List <Sight> sightsList = sightRepo.findAll();
        assertThat(sightsList, containsInAnyOrder(
                new Sight("2","OOO", "KKK", "FFF", "VVV", "SSS", "ZZZ", "WWW")
        ));
    }
}



