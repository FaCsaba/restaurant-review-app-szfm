package hu.unideb.inf.restaurant.controller;

import hu.unideb.inf.restaurant.data.CoordinatesDto;
import hu.unideb.inf.restaurant.data.FilterRestaurantsDto;
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

    @PostMapping("/restaurant/filter")
    public List<RestaurantAndReviewsDto> filterRestaurants (@RequestBody(required = false) FilterRestaurantsDto filter) {
        return restaurantService.findByFilter(filter.search(), filter.types(), filter.coords());
    }

    @GetMapping("/restaurant/distance")
    public List<RestaurantAndReviewsDto> getRestaurantsByDistance (@RequestParam Integer distance,
                                                                   @RequestBody CoordinatesDto coordinates) {
        return restaurantService.getRestaurantsByDistance(distance, coordinates);
    }

}
