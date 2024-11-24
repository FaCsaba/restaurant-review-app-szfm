package hu.unideb.inf.restaurant.service;

import hu.unideb.inf.restaurant.data.CoordinatesDto;
import hu.unideb.inf.restaurant.data.RestaurantAndReviewsDto;
import hu.unideb.inf.restaurant.entity.Restaurant;
import hu.unideb.inf.restaurant.entity.enums.RestaurantType;
import hu.unideb.inf.restaurant.mapper.RestaurantMapper;
import hu.unideb.inf.restaurant.repository.RestaurantRepository;
import hu.unideb.inf.restaurant.util.DistanceCalc;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
public class RestaurantService {

    @Autowired
    private RestaurantRepository restaurantRepository;

    @Autowired
    RestaurantMapper restaurantMapper;


    public RestaurantAndReviewsDto getRestaurantById(Integer id) {
        return restaurantMapper.restaurantToRestaurantDto(
                restaurantRepository.getRestaurantById(id)
        );
    }

    public  List<RestaurantAndReviewsDto> findByAny(String name, RestaurantType type, String description, CoordinatesDto coord) {
        List<Restaurant> entities = restaurantRepository.findAll();
        entities = entities.stream()
                .filter(x -> name == null || x.getName().equals(name))
                .filter(x -> type == null || x.getRestaurantType().equals(type))
                .filter(x -> description == null || x.getDescription().equals(description))
                .filter(x -> coord == null || x.getLocation().getLatitude().equals(coord.latitude()) &&
                        x.getLocation().getLongitude().equals(coord.longitude()))
                .toList();

        return restaurantMapper.restaurantListToRestaurantDtoList(entities);
    }

    //TODO: PostGIS használata, mert a stream lassú
    public List<RestaurantAndReviewsDto> getRestaurantsByDistance(Integer distance, CoordinatesDto coords) {
        List<Restaurant> entities = restaurantRepository.findAll();
        return entities.stream()
                .filter(x ->
                        DistanceCalc.calculate(coords.latitude(), x.getLocation().getLatitude(),
                                coords.longitude(), x.getLocation().getLongitude()) <= distance)
                .map(x -> restaurantMapper.restaurantToRestaurantDto(x))
                .collect(Collectors.toList());
    }
}
