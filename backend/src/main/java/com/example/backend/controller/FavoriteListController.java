package com.example.backend.controller;
import com.example.backend.model.FavoriteList;
import com.example.backend.service.FavoriteListService;
import org.springframework.web.bind.annotation.*;
import java.util.List;


@RestController
@RequestMapping("/api/favorites")
public class FavoriteListController {


    private final FavoriteListService favoriteListService;


    public FavoriteListController(FavoriteListService favoriteListService) {
        this.favoriteListService = favoriteListService;
    }

    @GetMapping
    public List <FavoriteList> getAllFavoriteListe () {
        return favoriteListService.getAllFavoriteListe();
    }


    @GetMapping("{favoriteListId}")
    public FavoriteList getFavoriteList (@PathVariable String favoriteListId) {
       return  favoriteListService.getFavoriteList (favoriteListId);
    }


    @PostMapping("{favoriteListId}/{sightId}")
    public FavoriteList addNewSightInFavoriteListe (@PathVariable String favoriteListId, @PathVariable String sightId)  {
        return favoriteListService.addNewSightInFavoriteListe (favoriteListId, sightId);
    }


    @DeleteMapping("{favoriteListId}")
    public boolean deleteFavoriteList (@PathVariable String favoriteListId) {
        return favoriteListService.deleteFavoriteList (favoriteListId);
    }


   @DeleteMapping("{favoriteListId}/{sightId}")
    public boolean deleteSightFromFavoriteListe (@PathVariable String favoriteListId, @PathVariable String sightId) {
        return favoriteListService.deleteSightFromFavoriteListe (favoriteListId, sightId);
    }
}
