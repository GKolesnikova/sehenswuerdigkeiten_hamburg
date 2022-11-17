package com.example.backend.security.service;
import com.example.backend.exception.PasswordValidationException;
import com.example.backend.security.model.AppUser;
import com.example.backend.security.model.CreateUserDto;
import com.example.backend.security.model.UserInfoDto;
import com.example.backend.security.repo.AppUserRepository;
import com.example.backend.security.validation.PasswordValidation;
import com.example.backend.service.IdService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;


@Service
public class UserService {

    private final AppUserRepository appUserRepository;
    private final PasswordEncoder passwordEncoder;
    private final IdService idService;

    @Autowired
    public UserService (AppUserRepository appUserRepository, PasswordEncoder passwordEncoder, IdService idService) {
        this.appUserRepository = appUserRepository;
        this.passwordEncoder = passwordEncoder;
        this.idService = idService;
    }


    public UserInfoDto getUserInfoDtoByUsername(String username) {
        AppUser appUser = appUserRepository.findByUserName(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));

        return UserInfoDto.builder()
                .id(appUser.getId())
                .userName(appUser.getUserName())
                .roles(appUser.getRoles())
                .favoriteSightsIds(appUser.getFavoriteSightsIds())
                .build();
    }



    public String register (CreateUserDto createUserDto) {
        if ( !PasswordValidation.isPasswordValidated (createUserDto.getPassword()) ) {
            throw new PasswordValidationException ( PasswordValidation.errorsPasswordValidation.toString() );
        }

        String hashedPassword = passwordEncoder.encode(createUserDto.getPassword());

        AppUser appUser = new AppUser();
        appUser.setId ( idService.generateID() );
        appUser.setUserName( createUserDto.getUserName() );
        appUser.setPasswordHash ( hashedPassword );
        appUser.setUserFirstName ( createUserDto.getUserFirstName() );
        appUser.setUserLastName ( createUserDto.getUserLastName() );
        appUser.setEMail ( createUserDto.getEMail() );
        appUser.setAddress ( createUserDto.getAddress() );
        appUser.setCity ( createUserDto.getCity() );
        appUser.setRoles ( List.of("USER" ) );

        return appUserRepository.save(appUser).getUserName();

    }



    public AppUser addNewSightToFavoriteListUser (String appUserId, String sightId) {
        if ( appUserId  == null || appUserId.isEmpty() || sightId  == null || sightId.isEmpty())
        {
            throw new IllegalArgumentException ("User id oder sight id is empty and require to fill");
        }

        Optional<AppUser> optionalAppUser  = appUserRepository.findById (appUserId);
        if ( optionalAppUser.isEmpty() ) {
            throw new NoSuchElementException("User not exist");
        }
        AppUser appUser = optionalAppUser.get();
        List<String> favoriteSightsIds = appUser.getFavoriteSightsIds();

        if (  favoriteSightsIds.contains(sightId) ) {
            return appUser;
        }
        favoriteSightsIds.add(sightId);
        appUser.setFavoriteSightsIds(favoriteSightsIds);
        return appUserRepository.save(appUser);
    }



    public boolean deleteSightFromFavoriteListeUser (String appUserId, String sightId) {

        Optional<AppUser> optionalAppUser  = appUserRepository.findById (appUserId);
        if ( optionalAppUser.isEmpty() ) {
            throw new NoSuchElementException("User not exist");
        }
        AppUser appUser = optionalAppUser.get();
        List<String> favoriteSightsIds = appUser.getFavoriteSightsIds();

        if ( !favoriteSightsIds.contains(sightId) ) {
            System.out.println("This sight with id :" + sightId + " not exist. You can not remove it.");
            return false;
        } else {
            favoriteSightsIds.remove(sightId);
            appUser.setFavoriteSightsIds(favoriteSightsIds);
            appUserRepository.save(appUser);

            return !favoriteSightsIds.contains(sightId);
        }
    }
}
