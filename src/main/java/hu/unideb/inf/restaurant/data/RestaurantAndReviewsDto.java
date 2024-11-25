package hu.unideb.inf.restaurant.data;

import hu.unideb.inf.restaurant.entity.enums.RestaurantType;
import lombok.Builder;

import java.util.List;

/**
 * DTO for {@link hu.unideb.inf.restaurant.entity.Restaurant}
 */
@Builder
public record RestaurantAndReviewsDto(Integer id,
                                      String name,
                                      RestaurantType restaurantType,
                                      Double rating,
                                      String description,
                                      LocationDto location,
                                      List<ReviewDto> reviews){
}