package hu.unideb.inf.restaurant.data;

import hu.unideb.inf.restaurant.entity.enums.EuropeanCountries;
import hu.unideb.inf.restaurant.entity.enums.RestaurantType;
import lombok.Builder;

import java.io.Serializable;
import java.util.List;

/**
 * DTO for {@link hu.unideb.inf.restaurant.entity.Restaurant}
 */
@Builder
public record RestaurantDto(Integer id,
                            String name,
                            RestaurantType restaurantType,
                            Double rating,
                            Double locationLongitude,
                            Double locationLatitude,
                            String locationCity,
                            EuropeanCountries locationCountry,
                            String locationAddLine1,
                            String locationAddLine2,
                            String locationAddLine3,
                            Integer locationZip,
                            List<ReviewDto> reviews){
    /**
     * DTO for {@link hu.unideb.inf.restaurant.entity.Review}
     */
    public record ReviewDto(Integer id, String review_text, Integer rating) {
    }
}