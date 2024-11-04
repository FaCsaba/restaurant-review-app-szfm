package hu.unideb.inf.restaurant.service;

import hu.unideb.inf.restaurant.entity.Restaurant;
import hu.unideb.inf.restaurant.entity.Review;
import hu.unideb.inf.restaurant.repository.RestaurantRepository;
import hu.unideb.inf.restaurant.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class ReviewService {

    @Autowired
    private ReviewRepository reviewRepository;

    @Autowired
    private RestaurantRepository restaurantRepository;

    @Transactional
    public void saveReview(Review review) {
        Integer restaurant_id = review.getRestaurant().getId();
        Restaurant restaurant = restaurantRepository.findById(restaurant_id)
                .orElseThrow(() -> new RuntimeException("Restaurant not found!"));
        restaurant.setRating(addToAverageRating(restaurant, review.getRating()));
        restaurantRepository.save(restaurant);

        review.setRestaurant(restaurant);
        reviewRepository.save(review);
    }


    @Transactional
    public void deleteReview(Integer id) {
        Review review = reviewRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Review not found!"));
        Restaurant restaurant = review.getRestaurant();
        restaurant.setRating(subtractFromAverageRating(restaurant, review.getRating()));
        restaurantRepository.save(restaurant);

        reviewRepository.delete(review);
    }


    private double addToAverageRating(Restaurant restaurant, Integer newRating) {
        List<Review> reviews = reviewRepository.findByRestaurant(restaurant);
        int numberOfReviews = reviews.size();
        double currentAverage = restaurant.getRating();
        return (currentAverage * numberOfReviews + newRating) / (numberOfReviews + 1);
    }


    private double subtractFromAverageRating(Restaurant restaurant, Integer oldRating) {
        List<Review> reviews = reviewRepository.findByRestaurant(restaurant);
        int numberOfReviews = reviews.size();
        double currentAverage = restaurant.getRating();
        if(numberOfReviews < 2) return 0;
        return (currentAverage * numberOfReviews - oldRating) / (numberOfReviews - 1);
    }
}


