package com.example.backend.security.service;
import com.example.backend.security.model.AppUser;
import com.example.backend.security.repo.AppUserRepository;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;


@Service
public class AppUserDetailsService implements UserDetailsService {

    private final AppUserRepository appUserRepository;

    public AppUserDetailsService(AppUserRepository appUserRepository) {
        this.appUserRepository = appUserRepository;
    }


    @Override
    public UserDetails loadUserByUsername (String username) throws UsernameNotFoundException {
        AppUser appUser = appUserRepository.findByUserName (username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));

        return new User ( appUser.getUserName(), appUser.getPasswordHash(),  extractSimpleGrantedAuthorities (appUser));
    }

    private List <SimpleGrantedAuthority> extractSimpleGrantedAuthorities (AppUser appUser) {
        List <SimpleGrantedAuthority> roles = new ArrayList<>();

        for ( String s : appUser.getRoles() ) {
            roles.add ( new SimpleGrantedAuthority(s) );
        }
        return roles;
    }
}
