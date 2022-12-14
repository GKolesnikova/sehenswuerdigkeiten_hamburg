package com.example.backend.security.repo;
import com.example.backend.security.model.AppUser;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;


@Repository
public interface AppUserRepository extends MongoRepository <AppUser, String> {

    Optional<AppUser> findByUserName (String userName);
}
