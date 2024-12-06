import "./restaurant-view.component.css"
import { Restaurant } from "../../api/restaurants";
import { useUIStateStore } from "../../stores/state.store";
import { RestaurantTypeLogoChip } from "../restaurant-type-logo-chip/restaurant-type-logo-chip.component";
import { LikeToggle } from "../like-toggle/like-toggle.component";
import { ReviewComponent } from "../review/review.component";
import { ReviewInput } from "../review-input/review-input.component";

export function RestaurantView({ restaurant }: { restaurant: Restaurant }) {
    const setSelectedRestaurant = useUIStateStore((state) => state.setSelectedRestaurant);

    return <section className="restaurant-view">
        <i className="bi bi-x icon icon-button" onClick={() => setSelectedRestaurant()} />
        <div className="restaurant-view-restaurant">
            <div className="restaurant-view-heading">
                <div className="restaurant-view-name-row">
                    <h2 className="restaurant-view-name">{restaurant.name}</h2>
                    <RestaurantTypeLogoChip restaurantType={restaurant.restaurantType} />
                    <LikeToggle isLiked={restaurant.isLiked} />
                </div>
                <div className="sub"><i className="bi bi-star-fill sub-icon" /> {restaurant.rating}</div>
                <div className="sub"><i className="bi bi-geo-alt-fill sub-icon" /> {restaurant.location.addLine1}</div>
            </div>
            <p className="restaurant-view-description">{restaurant.description}</p>
        </div>

        <div className="restaurant-view-review">
            <h2 className="restaurant-view-review-header">Reviews</h2>
            <ReviewInput />
            {restaurant.reviews.map((review) => <ReviewComponent key={review.id} review={review} />)}
        </div>

    </section>
}