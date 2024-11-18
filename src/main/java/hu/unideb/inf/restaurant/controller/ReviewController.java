package hu.unideb.inf.restaurant.controller;

import hu.unideb.inf.restaurant.data.ReviewDto;
import hu.unideb.inf.restaurant.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ReviewController {

    @Autowired
    private ReviewService reviewService;

    @PostMapping("/review")
    public void addReview(@RequestBody ReviewDto review) {
        reviewService.saveReview(review);
    }

    @DeleteMapping("/review")
    public void delete(@RequestParam Integer id) {
        reviewService.deleteReview(id);
    }

    @GetMapping("/reviews")
    public List<ReviewDto> getAllReviews() {
        //TODO
        return null;
    }
}

