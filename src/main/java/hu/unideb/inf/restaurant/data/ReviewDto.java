package hu.unideb.inf.restaurant.data;

import java.io.Serializable;

/**
 * DTO for {@link hu.unideb.inf.restaurant.entity.Review}
 */
public record ReviewDto(String reviewText,
                        Integer rating,
                        String restaurantName,
                        String username) implements Serializable {
  }