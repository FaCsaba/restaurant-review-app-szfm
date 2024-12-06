import { RestaurantType } from "../../api/restaurants";
import { cn } from "../../utils/classname";
import { RestaurantTypeChip } from "../restaurant-type-chip/restaurant-type-chip.component";
import { SearchBar } from "../search-bar/search-bar.component";
import "./search-strip.component.css";

export function SearchStrip({ className }: { className?: string }) {
    return <div className={cn("search-strip", className)}>
        <SearchBar />
        <div className="search-strip-filter-container">
            {Object.values(RestaurantType).map((t, i) => <RestaurantTypeChip key={i} restaurantType={t} />)}
        </div>
    </div>
}