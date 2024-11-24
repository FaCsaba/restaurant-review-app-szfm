package hu.unideb.inf.restaurant.controller;

import hu.unideb.inf.restaurant.data.CoordinatesDto;
import hu.unideb.inf.restaurant.data.RestaurantAndReviewsDto;
import hu.unideb.inf.restaurant.entity.enums.RestaurantType;
import hu.unideb.inf.restaurant.service.RestaurantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class RestaurantController {
    @Autowired
    RestaurantService restaurantService;

    @GetMapping("/restaurant")
    public RestaurantAndReviewsDto getRestaurant (@RequestParam Integer id) {
        return restaurantService.getRestaurantById(id);
    }

    //név.kategória,leírás szerint is kereshető legyen.
    @GetMapping("/restaurant/filter")
    public List<RestaurantAndReviewsDto> filterRestaurants (@RequestParam(required = false) String name,
                                                            @RequestParam(required = false) RestaurantType type,
                                                            @RequestParam(required = false) String description,
                                                            @RequestBody(required = false) CoordinatesDto coordinates) {
        return restaurantService.findByAny(name, type, description, coordinates);
    }


    @GetMapping("/restaurant/distance")
    public List<RestaurantAndReviewsDto> getRestaurantsByDistance (@RequestParam Integer distance,
                                                                   @RequestBody CoordinatesDto coordinates) {
        return restaurantService.getRestaurantsByDistance(distance, coordinates);
    }

}
