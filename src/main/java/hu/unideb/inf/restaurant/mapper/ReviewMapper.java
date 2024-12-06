package hu.unideb.inf.restaurant.mapper;

import hu.unideb.inf.restaurant.data.ReviewDto;
import hu.unideb.inf.restaurant.entity.Account;
import hu.unideb.inf.restaurant.entity.Review;
import hu.unideb.inf.restaurant.entity.Restaurant;
import hu.unideb.inf.restaurant.repository.AccountRepository;
import hu.unideb.inf.restaurant.repository.RestaurantRepository;
import org.mapstruct.AfterMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Mapper(componentModel = "spring")
public abstract class ReviewMapper {

    @Autowired
    private RestaurantRepository restaurantRepository;

    @Autowired
    private AccountRepository accountRepository;

    @Mapping(source = "reviewText", target = "reviewText")
    @Mapping(source = "rating", target = "rating")
    @Mapping(source = "restaurant.name", target = "restaurantName")
    @Mapping(source = "account.username", target = "username")
    public abstract ReviewDto reviewToReviewDto(Review review);

    @Mapping(source = "reviewText", target = "reviewText")
    @Mapping(source = "rating", target = "rating")
    @Mapping(source = "restaurantName", target = "restaurant.name")
    @Mapping(source = "username", target = "account.username")
    public abstract Review reviewDtoToReview(ReviewDto reviewDto);

    @AfterMapping
    public void setRestaurant(@MappingTarget Review review, ReviewDto reviewDto) {
        Restaurant restaurant = restaurantRepository.getRestaurantByName(reviewDto.restaurantName());
        review.setRestaurant(restaurant);
    }

    @AfterMapping
    public void setAccount(@MappingTarget Review review, ReviewDto reviewDto) {
        Account account = accountRepository.getAccountByUsername(reviewDto.username());
        review.setAccount(account);
    }
}
