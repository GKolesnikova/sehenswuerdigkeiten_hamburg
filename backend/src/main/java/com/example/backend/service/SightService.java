package com.example.backend.service;
import com.example.backend.model.Sight;
import com.example.backend.repo.SightRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;


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


    public Optional <Sight> getSightById (String id) {
            if ( !sightRepo.existsById(id) ) {
                throw new NoSuchElementException("No Sight with id : " + id + " found.");
            }
            return sightRepo.findById(id);
    }


    public void deleteSightById (String id) {
        Optional <Sight> sight = sightRepo.findById(id) ;

        if ( sight.isEmpty() ) {
            System.out.println("Sight was not really! It didn't exist in the fist place.");
        } else {
            sightRepo.deleteById(id);
        }
    }


}
