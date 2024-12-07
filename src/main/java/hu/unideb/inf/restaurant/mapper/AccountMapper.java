package hu.unideb.inf.restaurant.mapper;

import hu.unideb.inf.restaurant.data.AccountDto;
import hu.unideb.inf.restaurant.entity.Account;
import hu.unideb.inf.restaurant.entity.Restaurant;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;
import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface AccountMapper {

    @Mapping(target = "favorites", source = "favorites", qualifiedByName = "mapFavoritesToRestaurantIds")
    AccountDto accountToAccountDto(Account account);

    @Named("mapFavoritesToRestaurantIds")
    default List<Integer> mapFavoritesToRestaurantIds(List<Restaurant> favorites) {
        return favorites.stream()
                .map(Restaurant::getId)
                .collect(Collectors.toList());
    }
}