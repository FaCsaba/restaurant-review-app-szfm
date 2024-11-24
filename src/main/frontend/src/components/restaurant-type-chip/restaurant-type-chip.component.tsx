import { RestaurantType } from "../../api/restaurants";
import "./restaurant-type-chip.component.css";

function getChipLogoBasedOnRestaurantType(restaurantType: RestaurantType): string {
    switch (restaurantType) {
        case RestaurantType.FastFood: return "🍔";
        case RestaurantType.Healthy: return "🥗";
        case RestaurantType.American: return "🍟";
        case RestaurantType.Chinese: return "🥡";
        case RestaurantType.Cafe: return "☕";
        case RestaurantType.Japanese: return "🍜";
        case RestaurantType.FineDining: return "🍴";
        case RestaurantType.Dessert: return "🍨";
        default: throw new Error("Unreachable: Got " + restaurantType + " while trying to get chip logo.");
    }
}

export function RestaurantTypeChip({ restaurantType }: { restaurantType: RestaurantType }) {
    return <div className="restaurant-type-chip">{getChipLogoBasedOnRestaurantType(restaurantType)}</div>
}