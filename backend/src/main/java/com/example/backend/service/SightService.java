package com.example.backend.service;
import com.example.backend.model.Sight;
import com.example.backend.model.SightDTO;
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


    public Sight getSightById (String id) {
            return sightRepo.findById(id)
                    .orElseThrow( () -> new NoSuchElementException ("No Sight with id : " + id + " found.") );
    }


    public Sight addNewSight (SightDTO newSightDTO) {

        if ( newSightDTO.getName() == null        || newSightDTO.getName().isEmpty() ||
             newSightDTO.getImage() == null       || newSightDTO.getImage().isEmpty() ||
             newSightDTO.getAddress() == null     || newSightDTO.getAddress().isEmpty() ||
             newSightDTO.getWebsite() == null     || newSightDTO.getWebsite().isEmpty() ||
             newSightDTO.getTime() == null        || newSightDTO.getTime().isEmpty() ||
             newSightDTO.getDescription() == null || newSightDTO.getDescription().isEmpty() ||
             newSightDTO.getLocation() == null    || newSightDTO.getLocation().isEmpty() )
        {
            throw new IllegalArgumentException ("One of the required form fields is not filled. Given sight is missing mandatory name or image or address or website or time or description or location");
        }

        Sight newSight = Sight.builder()
                .id(idService.generateID())
                .name(newSightDTO.getName())
                .image(newSightDTO.getImage())
                .address(newSightDTO.getAddress())
                .website(newSightDTO.getWebsite())
                .time(newSightDTO.getTime())
                .description(newSightDTO.getDescription())
                .location(newSightDTO.getLocation())
                .build();

        return sightRepo.save(newSight);
    }


    public boolean deleteSightById (String id) {
        Optional <Sight> sight = sightRepo.findById(id) ;

        if ( sight.isEmpty() ) {
            System.out.println ("Sight was not really! It didn't exist in the fist place.");
            return false;
        } else {
            sightRepo.deleteById(id);
            return !sightRepo.existsById(id);
        }
    }
}
