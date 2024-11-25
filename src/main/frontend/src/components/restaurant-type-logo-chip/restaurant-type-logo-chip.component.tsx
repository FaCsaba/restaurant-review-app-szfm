import { RestaurantType } from "../../api/restaurants";
import { getChipLogoBasedOnRestaurantType } from "../../utils/chips";
import "./restaurant-type-logo-chip.component.css";

export function RestaurantTypeLogoChip({ restaurantType }: { restaurantType: RestaurantType }) {
    return <div className="restaurant-type-logo-chip">{getChipLogoBasedOnRestaurantType(restaurantType)}</div>
}