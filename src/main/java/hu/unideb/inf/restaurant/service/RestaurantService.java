package hu.unideb.inf.restaurant.service;

import hu.unideb.inf.restaurant.data.RestaurantAndReviewsDto;
import hu.unideb.inf.restaurant.entity.Restaurant;
import hu.unideb.inf.restaurant.entity.enums.RestaurantType;
import hu.unideb.inf.restaurant.mapper.RestaurantMapper;
import hu.unideb.inf.restaurant.repository.RestaurantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

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

    public  List<RestaurantAndReviewsDto> findByAny(String name, RestaurantType type, String description) {
        List<Restaurant> szuro = restaurantRepository.findAll();
        szuro= szuro.stream()
                .filter(x -> name==null||x.getName().equals(name)).filter(x -> type==null||x.getRestaurantType().equals(type))
                .filter(x -> description==null||x.getDescription().equals(description)).toList();

        return restaurantMapper.restaurantListToRestaurantDtoList(szuro);
    }
}
