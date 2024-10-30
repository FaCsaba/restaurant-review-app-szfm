package hu.unideb.inf.restaurant.controller;

import hu.unideb.inf.restaurant.entity.Review;
import hu.unideb.inf.restaurant.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class ReviewController {

    @Autowired
    private ReviewService reviewService;

    @PostMapping("/review")
    public void addReview(@RequestBody Review review) {
        reviewService.saveReview(review);
    }

    @DeleteMapping("/review")
    public void delete(@RequestParam Integer id) {
        reviewService.deleteReview(id);
    }

}

