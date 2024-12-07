import { Restaurant } from "../../api/restaurants";
import { useUIStateStore } from "../../stores/state.store";
import { LikeToggle } from "../like-toggle/like-toggle.component";
import { RestaurantTypeLogoChip } from "../restaurant-type-logo-chip/restaurant-type-logo-chip.component";
import { SearchStrip } from "../search-strip/search-strip.component";
import "./search-overlay.component.css";

export function SearchOverlay({ restaurants }: { restaurants: Restaurant[] }) {
    const setIsSearching = useUIStateStore((state) => state.setIsSearching);
    const setSelectedRestaurant = useUIStateStore((state) => state.setSelectedRestaurant);

    return <section className="search-overlay">
        <div className="search-overlay-header">
            <i className="bi bi-x icon icon-button" onClick={() => setIsSearching(false)} />
            Restaurants near me
        </div>
        <SearchStrip className="flat" />
        <div className="restaurant-search-restaurants">
            {restaurants.map((restaurant, i) => <div key={i} className="restaurant-search">
                <div className="restaurant-search-name-row">
                    <h2 className="restaurant-search-name" onClick={() => setSelectedRestaurant(restaurant)}>{restaurant.name}</h2>
                    <RestaurantTypeLogoChip restaurantType={restaurant.restaurantType} />
                    <LikeToggle restaurantId={restaurant.id} />
                </div>
                <p className="restaurant-search-description">{restaurant.description}</p>
            </div>)}
        </div>
    </section>
}