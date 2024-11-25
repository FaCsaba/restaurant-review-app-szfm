package hu.unideb.inf.restaurant.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import hu.unideb.inf.restaurant.entity.enums.RestaurantType;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.ColumnDefault;

import java.util.List;

@Entity
@Table(name = "restaurant")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Restaurant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false, unique = false)
    private String name;

    @OneToOne
    @JoinColumn(name = "location_id", referencedColumnName = "id", nullable = false)
    private Location location;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private RestaurantType restaurantType;

    @Column(nullable = false)
    @ColumnDefault("'No Description'")
    private String description = "No description";

    @Column(insertable = false)
    @ColumnDefault("0.0")
    private Double rating;

    @OneToMany(mappedBy = "restaurant", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    @JsonIgnore
    private List<Review> reviews;

}
