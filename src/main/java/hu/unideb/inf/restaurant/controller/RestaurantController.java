package hu.unideb.inf.restaurant.controller;

import hu.unideb.inf.restaurant.data.RestaurantAndReviewsDto;
import hu.unideb.inf.restaurant.entity.enums.RestaurantType;
import hu.unideb.inf.restaurant.service.RestaurantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class RestaurantController {
    @Autowired
    RestaurantService restaurantService;

    @GetMapping("/restaurant")
    public RestaurantAndReviewsDto getRestaurant(@RequestParam Integer id) {
        return restaurantService.getRestaurantById(id);
    }

    //név.kategória,leírás szerint is kereshető legyen.
    @GetMapping("/restaurant")
    public List<RestaurantAndReviewsDto> filterRestaurant(@RequestParam(required = false) String name, @RequestParam(required = false)
    RestaurantType type, @RequestParam(required = false) String description) {
        return restaurantService.findByAny(name, type, description);
    }
}
