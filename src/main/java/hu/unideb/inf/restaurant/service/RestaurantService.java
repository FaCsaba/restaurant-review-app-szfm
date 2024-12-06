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

import java.util.List;
import java.util.stream.Collectors;

@Service
public class RestaurantService {
   private final static double filterMaxDistance = 10;

    @Autowired
    private RestaurantRepository restaurantRepository;

    @Autowired
    RestaurantMapper restaurantMapper;


    public RestaurantAndReviewsDto getRestaurantById(Integer id) {
        return restaurantMapper.restaurantToRestaurantDto(
                restaurantRepository.getRestaurantById(id)
        );
    }

    public  List<RestaurantAndReviewsDto> findByFilter(String search, List<RestaurantType> type, CoordinatesDto coords) {
        List<Restaurant> entities = restaurantRepository.findAll();
        entities = entities.stream()
                .filter(x -> search == null || x.getName().contains(search) || x.getDescription().equals(search))
                .filter(x -> type == null || type.isEmpty() || type.contains(x.getRestaurantType()))
                .filter(x -> DistanceCalc.calculate(coords.latitude(), x.getLocation().getLatitude(),
                                coords.longitude(), x.getLocation().getLongitude()) <= filterMaxDistance)
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
