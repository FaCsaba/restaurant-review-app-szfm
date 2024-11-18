package hu.unideb.inf.restaurant.data;

import java.io.Serializable;

/**
 * DTO for {@link hu.unideb.inf.restaurant.entity.Account}
 */
public record AccountDto(Integer id, String username) {
}