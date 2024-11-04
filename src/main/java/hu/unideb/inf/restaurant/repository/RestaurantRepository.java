package hu.unideb.inf.restaurant.repository;

import hu.unideb.inf.restaurant.data.RestaurantDto;
import hu.unideb.inf.restaurant.entity.Restaurant;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RestaurantRepository extends JpaRepository<Restaurant, Integer> {
    Restaurant getRestaurantById(Integer id);
}
