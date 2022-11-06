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


    public Sight getSightById (String id)  {
            return sightRepo.findById(id)
                    .orElseThrow( () -> new NoSuchElementException ("No Sight with id : " + id + " found.") );
    }


    public Sight addNewSight (SightDTO newSightDTO)   {

        if ( newSightDTO.getName()        == null || newSightDTO.getName().isEmpty() ||
             newSightDTO.getImage1()      == null || newSightDTO.getImage1().isEmpty() ||
             newSightDTO.getImage2()      == null || newSightDTO.getImage2().isEmpty() ||
             newSightDTO.getImage3()      == null || newSightDTO.getImage3().isEmpty() ||
             newSightDTO.getAddress()     == null || newSightDTO.getAddress().isEmpty() ||
             newSightDTO.getWebsite()     == null || newSightDTO.getWebsite().isEmpty() ||
             newSightDTO.getTime()        == null || newSightDTO.getTime().isEmpty() ||
             newSightDTO.getDescription() == null || newSightDTO.getDescription().isEmpty() ||
             newSightDTO.getLocation()    == null || newSightDTO.getLocation().isEmpty() )
        {
            throw new IllegalArgumentException ("One of the required form fields is not filled. Given sight is missing mandatory name or image1 or image2 or image3 or address or website or time or description or location");
        }

        Sight newSight = Sight.builder()
                .id(idService.generateID())
                .name(newSightDTO.getName())
                .image1(newSightDTO.getImage1())
                .image2(newSightDTO.getImage2())
                .image3(newSightDTO.getImage3())
                .address(newSightDTO.getAddress())
                .website(newSightDTO.getWebsite())
                .time(newSightDTO.getTime())
                .description(newSightDTO.getDescription())
                .location(newSightDTO.getLocation())
                .build();

        return sightRepo.save(newSight);
    }


    public Sight updateSight (String id, Sight sight) throws NoSuchElementException {

        if ( !sightRepo.existsById(id) ) {
            throw new NoSuchElementException ("No Sight with id : " + id + " found.");
        }
        return sightRepo.save(sight);
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
