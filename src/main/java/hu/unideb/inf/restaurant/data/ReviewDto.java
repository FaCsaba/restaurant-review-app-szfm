package hu.unideb.inf.restaurant.data;


/**
 * DTO for {@link hu.unideb.inf.restaurant.entity.Review}
 */
public record ReviewDto(String reviewText,
                        Integer rating,
                        Integer restaurantId,
                        //TODO: security contextbol kiszedni az usernamet
                        String username){
  }