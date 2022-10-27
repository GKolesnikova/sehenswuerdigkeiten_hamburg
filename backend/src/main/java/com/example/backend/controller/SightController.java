package com.example.backend.controller;
import com.example.backend.model.Sight;
import com.example.backend.service.SightService;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/api/sights")
public class SightController {

    private final SightService sightService;

    public SightController(SightService sightService) {
        this.sightService = sightService;
    }


    @GetMapping
    public  List<Sight> getAllSight () {
        return sightService.getAllSight();
    }

    @GetMapping("{id}")
    public Optional <Sight> getSightById (@PathVariable String id) {
        return sightService.getSightById(id);
    }


    @DeleteMapping("{id}")
    public boolean deleteSightById (@PathVariable String id) {
        return sightService.deleteSightById(id);
    }



}