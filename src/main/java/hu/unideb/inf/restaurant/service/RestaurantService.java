package hu.unideb.inf.restaurant.service;

import hu.unideb.inf.restaurant.data.RestaurantAndReviewsDto;
import hu.unideb.inf.restaurant.mapper.RestaurantMapper;
import hu.unideb.inf.restaurant.repository.RestaurantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RestaurantService {


    @Autowired
    private RestaurantRepository restaurantRepository;

    @Autowired
    RestaurantMapper restaurantMapper;

    public RestaurantAndReviewsDto getRestaurantById(Integer id) {
        /*
        RestaurantMapper mapper = new RestaurantMapper();
        return mapper.apply(restaurantRepository.getRestaurantById(id));
         */

        return restaurantMapper.restaurantToRestaurantDto(
                restaurantRepository.getRestaurantById(id));
    }

}
