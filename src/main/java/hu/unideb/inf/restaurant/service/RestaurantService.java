package hu.unideb.inf.restaurant.service;

import hu.unideb.inf.restaurant.data.RestaurantDto;
import hu.unideb.inf.restaurant.mapper.RestaurantMapper;
import hu.unideb.inf.restaurant.repository.RestaurantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RestaurantService {

    @Autowired
    private RestaurantMapper restaurantMapper;

    @Autowired
    private RestaurantRepository restaurantRepository;


    public RestaurantDto getRestaurantById(Integer id) {
        RestaurantMapper mapper = new RestaurantMapper();
        return mapper.apply(restaurantRepository.getRestaurantById(id));
    }
}
