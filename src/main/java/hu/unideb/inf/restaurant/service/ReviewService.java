package hu.unideb.inf.restaurant.service;

import hu.unideb.inf.restaurant.entity.Restaurant;
import hu.unideb.inf.restaurant.entity.Review;
import hu.unideb.inf.restaurant.repository.RestaurantRepository;
import hu.unideb.inf.restaurant.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class ReviewService {

    @Autowired
    private ReviewRepository reviewRepository;

    @Autowired
    private RestaurantRepository restaurantRepository;

    @Transactional
    public void saveReview(Review review) {
        Restaurant restaurant = restaurantRepository.findById(review.getRestaurant().getId())
                .orElseThrow(() -> new RuntimeException("Restaurant not found!"));
        review.setRestaurant(restaurant);
        reviewRepository.save(review);
        updateAverageRating(restaurant);
    }

    private void updateAverageRating(Restaurant restaurant) {
        List<Review> reviews = reviewRepository.findByRestaurant(restaurant);
        double averageRating = reviews.stream()
                .mapToInt(Review::getRating)
                .average()
                .orElse(0.0);
        restaurant.setAverage_rating(averageRating);
        restaurantRepository.save(restaurant);
    }

    public void deleteReview(int id) {
        reviewRepository.deleteById(id);
    }
}


