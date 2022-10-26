package com.example.backend.service;
import com.example.backend.model.Sight;
import com.example.backend.repo.SightRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;


@Service
public class SightService {

    private final SightRepo sightRepo;
    private final IdService idService;

    @Autowired
    public SightService(SightRepo sightRepo, IdService idService) {
        this.sightRepo = sightRepo;
        this.idService = idService;
    }


    public List<Sight> getAllSight () {
        return sightRepo.findAll();
    }





}
