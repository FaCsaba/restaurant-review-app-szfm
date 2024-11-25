package hu.unideb.inf.restaurant.repository;

import hu.unideb.inf.restaurant.entity.Restaurant;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RestaurantRepository extends JpaRepository<Restaurant, Integer> {
    Restaurant getRestaurantById(Integer id);
    Restaurant getRestaurantByName(String name);
    Restaurant findByName(String name);
}
