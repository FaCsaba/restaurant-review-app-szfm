package hu.unideb.inf.restaurant.controller;

import hu.unideb.inf.restaurant.data.RestaurantAndReviewsDto;
import hu.unideb.inf.restaurant.service.RestaurantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class RestaurantController {
    @Autowired
    RestaurantService restaurantService;

    @GetMapping("/restaurant")
    public RestaurantAndReviewsDto getRestaurant(@RequestParam Integer id) {
        return restaurantService.getRestaurantById(id);
    }
}
