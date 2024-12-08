package hu.unideb.inf.restaurant.data;

import hu.unideb.inf.restaurant.entity.enums.EuropeanCountries;


/**
 * DTO for {@link hu.unideb.inf.restaurant.entity.Location}
 */
public record LocationDto(Double longitude,
                          Double latitude,
                          String city,
                          EuropeanCountries country,
                          String addLine1,
                          String addLine2,
                          String addLine3,
                          Integer zip) {
}