package com.example.backend.repo;
import com.example.backend.model.FavoriteList;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface FavoriteListRepo extends MongoRepository <FavoriteList, String> {


}
