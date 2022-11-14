package com.example.backend.security.controller;
import com.example.backend.security.model.AppUser;
import com.example.backend.security.model.CreateUserDto;
import com.example.backend.security.model.UserInfoDto;
import com.example.backend.security.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import javax.servlet.http.HttpSession;


@RestController
@RequestMapping("api/user")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }


    @GetMapping("/login")
    public UserInfoDto login () {
        String username = SecurityContextHolder
                                    .getContext()
                                    .getAuthentication()
                                    .getName();

        return userService.getUserInfoDtoByUsername(username);
    }


    @GetMapping("/logout")
    public void logout (HttpSession session) {
        session.invalidate();
    }


    @PostMapping("/register")
    public UserInfoDto register (@RequestBody CreateUserDto createUserDto) {

        String username = userService.register(createUserDto);
        return userService.getUserInfoDtoByUsername(username);
    }


    @PostMapping("{appUserId}/{sightId}")
    public AppUser addNewSightToFavoriteListUser (@PathVariable String appUserId, @PathVariable String sightId)  {
        return userService.addNewSightToFavoriteListUser (appUserId, sightId);
    }

    @DeleteMapping("{appUserId}/{sightId}")
    public boolean deleteSightFromFavoriteListeUser (@PathVariable String appUserId, @PathVariable String sightId) {
        return userService.deleteSightFromFavoriteListeUser (appUserId, sightId);
    }
}
