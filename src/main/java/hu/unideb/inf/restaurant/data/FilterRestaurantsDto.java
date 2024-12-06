package hu.unideb.inf.restaurant.data;

import java.util.List;

import hu.unideb.inf.restaurant.entity.enums.RestaurantType;
import lombok.Builder;

@Builder
public record FilterRestaurantsDto(
        List<RestaurantType> types,
        String search,
        CoordinatesDto coords) {
}
