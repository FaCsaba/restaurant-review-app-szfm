package hu.unideb.inf.restaurant.repository;

import hu.unideb.inf.restaurant.entity.Location;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LocationRepository extends JpaRepository<Location, Integer> {
}