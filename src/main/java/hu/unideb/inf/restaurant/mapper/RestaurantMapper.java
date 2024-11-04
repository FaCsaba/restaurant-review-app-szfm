package hu.unideb.inf.restaurant.mapper;

import hu.unideb.inf.restaurant.data.RestaurantDto;
import hu.unideb.inf.restaurant.entity.Restaurant;
import hu.unideb.inf.restaurant.entity.Review;
import hu.unideb.inf.restaurant.repository.LocationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.function.Function;
import java.util.stream.Collectors;

@Service
public class RestaurantMapper implements Function<Restaurant, RestaurantDto> {

    @Autowired
    LocationRepository locationRepository;

    private RestaurantDto.ReviewDto mapToReviewDto(Review review) {
        return new RestaurantDto.ReviewDto(
                review.getId(),
                review.getReview_text(),
                review.getRating()
        );
    }


    @Override
    public RestaurantDto apply(Restaurant restaurant) {
        return new RestaurantDto(
                restaurant.getId(),
                restaurant.getName(),
                restaurant.getRestaurantType(),
                restaurant.getRating(),
                restaurant.getLocation().getLongitude(),
                restaurant.getLocation().getLatitude(),
                restaurant.getLocation().getCity(),
                restaurant.getLocation().getCountry(),
                restaurant.getLocation().getAddLine1(),
                restaurant.getLocation().getAddLine2(),
                restaurant.getLocation().getAddLine3(),
                restaurant.getLocation().getZip(),
                restaurant.getReviews().stream()
                        .map(this::mapToReviewDto)
                        .collect(Collectors.toList())

        );
    }
}
