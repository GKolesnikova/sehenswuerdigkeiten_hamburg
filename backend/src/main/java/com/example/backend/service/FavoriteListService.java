package com.example.backend.service;
import com.example.backend.model.FavoriteList;
import com.example.backend.repo.FavoriteListRepo;
import org.springframework.stereotype.Service;
import java.util.*;


@Service
public class FavoriteListService {

    private final FavoriteListRepo favoriteListRepo;

    public FavoriteListService(FavoriteListRepo favoriteListRepo) {
        this.favoriteListRepo = favoriteListRepo;
     }

    public List <FavoriteList> getAllFavoriteListe() {
        return favoriteListRepo.findAll();
    }


    public FavoriteList getFavoriteList (String favoriteListId) {
       return favoriteListRepo.findById(favoriteListId)
               .orElseThrow( () -> new NoSuchElementException("No favorite list with id : " + favoriteListId + " found."));
    }


    public FavoriteList addNewSightInFavoriteListe (String favoriteListId, String sightId) {

        if ( sightId  == null || sightId.isEmpty() )
        {
            throw new IllegalArgumentException ("Sight id is empty and require to fill");
        }

        Optional <FavoriteList> optionalFavoriteList  = favoriteListRepo.findById (favoriteListId);
        FavoriteList favoriteList;

        if ( optionalFavoriteList.isEmpty() ) {
            favoriteList = new FavoriteList();
        } else {
              favoriteList = optionalFavoriteList.get();
        }
        List<String> favoriteSights = favoriteList.getFavoriteSights();

        if (  favoriteSights.contains(sightId) ) {
            return favoriteList;
        }

        favoriteSights.add(sightId);
        favoriteList.setFavoriteSights(favoriteSights);
        return favoriteListRepo.save(favoriteList);
    }


    public boolean deleteFavoriteList (String favoriteListId) {
        Optional <FavoriteList> favoriteList = favoriteListRepo.findById (favoriteListId);

        if ( favoriteList.isEmpty() ) {
            System.out.println("Favorite list was not really! It didn't exist in the fist place.");
            return false;
        } else {
            favoriteListRepo.deleteById (favoriteListId);
            return  !favoriteListRepo.existsById (favoriteListId);
        }
    }


    public boolean deleteSightFromFavoriteListe (String favoriteListId, String sightId) {

        Optional <FavoriteList> optionalFavoriteList  = favoriteListRepo.findById (favoriteListId);
        if ( optionalFavoriteList.isEmpty() ) {
            System.out.println("Favorit list with id " + favoriteListId + " not exist!");
            return false;
        }
        FavoriteList favoriteList = optionalFavoriteList.get();
        List<String> favoriteSights = favoriteList.getFavoriteSights();

         if ( !favoriteSights.contains(sightId) ) {
            System.out.println("Favorite list not contains this sight with id :" + sightId + " You can not remove it.");
            return false;
        } else {
             favoriteSights.remove(sightId);
             favoriteList.setFavoriteSights(favoriteSights);
             favoriteListRepo.save(favoriteList);

             return !favoriteSights.contains(sightId);
        }
    }
}
