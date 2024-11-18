package hu.unideb.inf.restaurant.entity;

import hu.unideb.inf.restaurant.entity.enums.EuropeanCountries;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "location")
@AllArgsConstructor
@NoArgsConstructor
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

    @Column(name = "add_line_1")
    private String addLine1;

    @Column(name = "add_line_2")
    private String addLine2;

    @Column(name = "add_line_3")
    private String addLine3;

    @Column
    private Integer zip;
}
