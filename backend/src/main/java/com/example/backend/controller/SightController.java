package com.example.backend.controller;
import com.example.backend.model.Sight;
import com.example.backend.service.SightService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
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


}
