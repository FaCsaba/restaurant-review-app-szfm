package hu.unideb.inf.restaurant.controller;

import hu.unideb.inf.restaurant.data.ReviewDto;
import hu.unideb.inf.restaurant.service.ReviewService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@AllArgsConstructor
public class ReviewController {
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
        //userhez tartozo összes lista
        return null;
    }
}

