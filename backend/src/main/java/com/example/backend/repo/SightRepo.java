package com.example.backend.repo;
import com.example.backend.model.Sight;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface SightRepo extends MongoRepository <Sight, String> {


}
 

 
