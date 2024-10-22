package hu.unideb.inf.restaurant.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name="favorite")
@AllArgsConstructor
@NoArgsConstructor
@Data
@Getter
@Setter
public class Favorite {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "restaurant_id", nullable = false)
    private Restaurant restaurant;
}
