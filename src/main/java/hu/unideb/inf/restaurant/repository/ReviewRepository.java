package hu.unideb.inf.restaurant.repository;

import hu.unideb.inf.restaurant.entity.Restaurant;
import hu.unideb.inf.restaurant.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReviewRepository extends JpaRepository<Review, Integer> {
    List<Review> findByRestaurant(Restaurant restaurant);
}
