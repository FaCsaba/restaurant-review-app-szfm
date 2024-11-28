import { RestaurantType } from "../../api/restaurants";
import { RestaurantTypeChip } from "../restaurant-type-chip/restaurant-type-chip.component";
import { SearchBar } from "../search-bar/search-bar.component";
import "./search-strip.component.css";

export function SearchStrip() {
    return <div className="search-strip">
        <SearchBar />
        <div className="search-strip-filter-container">
            {Object.values(RestaurantType).map((t, i) => <RestaurantTypeChip  key={i} restaurantType={t} />)}
        </div>
    </div>
}