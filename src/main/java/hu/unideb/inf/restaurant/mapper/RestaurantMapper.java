package hu.unideb.inf.restaurant.mapper;

import hu.unideb.inf.restaurant.data.RestaurantAndReviewsDto;
import hu.unideb.inf.restaurant.entity.Restaurant;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface RestaurantMapper {
    RestaurantAndReviewsDto restaurantToRestaurantDto(Restaurant restaurant);
    Restaurant restaurantDtoToRestaurant(RestaurantAndReviewsDto restaurantDto);
}
