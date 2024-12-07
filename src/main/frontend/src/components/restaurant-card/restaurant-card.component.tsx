import { Popup } from "react-leaflet";
import { Restaurant } from "../../api/restaurants";
import "./restaurant-card.component.css";
import { RestaurantTypeLogoChip } from "../restaurant-type-logo-chip/restaurant-type-logo-chip.component";
import { Button } from "../button/button.component";
import { ReviewComponent } from "../review/review.component";
import { FavoriteToggle } from "../like-toggle/favorite-toggle.component";
import { useUIStateStore } from "../../stores/state.store";

export function RestaurantCard({ restaurant }: { restaurant: Restaurant }) {
    const setSelectedRestaurant = useUIStateStore((state) => state.setSelectedRestaurant);
    const setReviewedRestaurant = useUIStateStore((state) => state.setReviewedRestaurant);

    return (
        <Popup keepInView closeButton={false} autoPan minWidth={300}>
            <div className="restaurant-card-info">
                <div className="restaurant-card-heading">
                    <div className="restaurant-card-name-row">
                        <h2 className="restaurant-card-name">{restaurant.name}</h2>
                        <RestaurantTypeLogoChip restaurantType={restaurant.restaurantType} />
                        <FavoriteToggle restaurantId={restaurant.id} />
                    </div>
                    <div className="sub"><i className="bi bi-star-fill sub-icon" /> {restaurant.rating}</div>
                    <div className="sub"><i className="bi bi-geo-alt-fill sub-icon" /> {restaurant.location.addLine1}</div>
                </div>
                <div className="restaurant-card-button-row">
                    <Button className="flat restaurant-card-button" onClick={() => setReviewedRestaurant(restaurant.id)}>Review</Button>
                    <Button className="flat restaurant-card-button" onClick={() => setSelectedRestaurant(restaurant.id)}>Learn more</Button>
                </div>
            </div>
            {restaurant.topReview ?
                <div className="restaurant-card-top-review">
                    <h3 className="sub">Top review:</h3>
                    <ReviewComponent review={restaurant.topReview} />
                </div> : null
            }
        </Popup>
    );
}