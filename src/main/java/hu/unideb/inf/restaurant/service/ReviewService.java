package hu.unideb.inf.restaurant.service;

import hu.unideb.inf.restaurant.data.ReviewDto;
import hu.unideb.inf.restaurant.entity.Account;
import hu.unideb.inf.restaurant.entity.Restaurant;
import hu.unideb.inf.restaurant.entity.Review;
import hu.unideb.inf.restaurant.mapper.ReviewMapper;
import hu.unideb.inf.restaurant.repository.RestaurantRepository;
import hu.unideb.inf.restaurant.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Objects;

@Service
public class ReviewService {

    @Autowired
    private ReviewRepository reviewRepository;

    @Autowired
    private RestaurantRepository restaurantRepository;

    @Autowired
    ReviewMapper reviewMapper;

    @Transactional
    public void saveReview(ReviewDto dto) {
        Review review = reviewMapper.reviewDtoToReview(dto);
        Restaurant restaurant = review.getRestaurant();
        Account account = review.getAccount();
        //TODO: jobb megoldast talalni erre
        if((account != null && account.getReviews().stream()
                .noneMatch(rev -> rev.getRestaurant().equals(restaurant)))
        || Objects.equals(Objects.requireNonNull(account).getUsername(), "Anonymous")) {
            restaurant.setRating(addToAverageRating(restaurant, review.getRating()));
            restaurantRepository.save(restaurant);

            review.setRestaurant(restaurant);
            reviewRepository.save(review);
        }
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

    public List<ReviewDto> getAllReviews() {
        //TODO
        return null;
    }
}


