package hu.unideb.inf.restaurant.repository;

import hu.unideb.inf.restaurant.entity.Favorite;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FavoriteRepository extends JpaRepository<Favorite, Integer> {
    Favorite getFavoriteById(Integer id);
    //Favorite getFavoriteByUserIdAndRestaurantId(Integer userId, Integer restaurantId);
}