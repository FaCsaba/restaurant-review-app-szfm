package hu.unideb.inf.restaurant.entity;

import hu.unideb.inf.restaurant.entity.enums.EuropeanCountries;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "location")
@AllArgsConstructor
@NoArgsConstructor
@Data
@Getter
@Setter
public class Location {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)
    private Double longitude;

    @Column(nullable = false)
    private Double latitude;

    @Column(nullable = false)
    private String city;

    @Enumerated(EnumType.STRING)
    @Column
    private EuropeanCountries country;

    @Column
    private String add_line_1;

    @Column
    private String add_line_2;

    @Column
    private String add_line_3;

    @Column
    private Integer zip;
}
