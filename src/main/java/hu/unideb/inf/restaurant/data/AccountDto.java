package hu.unideb.inf.restaurant.data;

import java.io.Serializable;
import java.util.List;

/**
 * DTO for {@link hu.unideb.inf.restaurant.entity.Account}
 */
public record AccountDto(String username, List<Integer> favorites) {
}