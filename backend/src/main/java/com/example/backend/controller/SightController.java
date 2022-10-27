package com.example.backend.controller;
import com.example.backend.model.Sight;
import com.example.backend.service.SightService;
import org.springframework.web.bind.annotation.*;
import java.util.List;


@RestController
@RequestMapping("/api/sights")
public class SightController {

    private final SightService sightService;

    public SightController(SightService sightService) {
        this.sightService = sightService;
    }


    @GetMapping("/get-all")
    public  List<Sight> getAllSight () {
        return sightService.getAllSight();
    }

    @DeleteMapping("/delete-by-id/{id}")
    public void deleteSightById (@PathVariable String id) {
        sightService.deleteSightById(id);
    }



}