package hu.unideb.inf.restaurant.controller;

import hu.unideb.inf.restaurant.data.RestaurantDto;
import hu.unideb.inf.restaurant.repository.RestaurantRepository;
import hu.unideb.inf.restaurant.service.RestaurantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
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
    public RestaurantDto getRestaurant(@RequestParam Integer id) {
        return restaurantService.getRestaurantById(id);
    }
}
