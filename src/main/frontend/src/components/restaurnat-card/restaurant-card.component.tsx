import { Popup } from "react-leaflet";
import { Restaurant } from "../../api/restaurants";
import "./restaurant-card.component.css";
import { RestaurantTypeChip } from "../restaurant-type-chip/restaurant-type-chip.component";
import { Button } from "../button/button.component";
import { ReviewComponent } from "../review/review.component";

function LikeToggle({ isLiked }: { isLiked: boolean }) {
    return <button className="like-button">{isLiked ? <i className="bi bi-heart-fill danger" /> : <i className="bi bi-heart sub-icon" />}</button>;
}

export function RestaurantCard({ restaurant }: { restaurant: Restaurant }) {
    return (
        <Popup keepInView closeButton={false} autoPan minWidth={300}>
            <div className="restaurant-card-info">
                <div className="restaurant-card-heading">
                    <div className="restaurant-card-name-row">
                        <h2 className="restaurant-name">{restaurant.name}</h2>
                        <RestaurantTypeChip restaurantType={restaurant.restaurantType} />
                        <LikeToggle isLiked={restaurant.isLiked} />
                    </div>
                    <div className="sub"><i className="bi bi-star-fill sub-icon" /> {restaurant.avgRating}</div>
                    <div className="sub"><i className="bi bi-star-fill sub-icon" /> {restaurant.location.addressLine1}</div>
                </div>
                <div className="restaurant-card-button-row">
                    <Button className="flat restaurant-card-button">Review</Button>
                    <Button className="flat restaurant-card-button">Learn more</Button>
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