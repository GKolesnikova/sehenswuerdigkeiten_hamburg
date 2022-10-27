package com.example.backend.repo;
import com.example.backend.model.Sight;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface SightRepo extends MongoRepository <Sight, String> {
   /* default boolean deleteSightById (String id) {
        this.deleteById(id);
        return !this.existsById(id);
    }*/

}
 

 
