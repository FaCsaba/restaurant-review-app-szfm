package hu.unideb.inf.restaurant.mapper;

import hu.unideb.inf.restaurant.data.RestaurantAndReviewsDto;
import hu.unideb.inf.restaurant.entity.Restaurant;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface RestaurantMapper {
    RestaurantAndReviewsDto restaurantToRestaurantDto(Restaurant restaurant);
    Restaurant restaurantDtoToRestaurant(RestaurantAndReviewsDto restaurantDto);
    List<RestaurantAndReviewsDto> restaurantListToRestaurantDtoList(List<Restaurant> restaurants);
    List<Restaurant> restaurantDtoListToRestaurantList(List<RestaurantAndReviewsDto> restaurantDtos);
}
