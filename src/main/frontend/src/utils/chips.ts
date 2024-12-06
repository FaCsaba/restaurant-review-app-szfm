import { RestaurantType } from "../api/restaurants";

export function getChipLogoBasedOnRestaurantType(restaurantType: RestaurantType): string {
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

export function getChipNameBasedOnRestaurantType(restaurantType: RestaurantType): string {
    switch (restaurantType) {
        case RestaurantType.FastFood: return "Fast food";
        case RestaurantType.Healthy: return "Healthy";
        case RestaurantType.American: return "American";
        case RestaurantType.Chinese: return "Chinese";
        case RestaurantType.Cafe: return "Café";
        case RestaurantType.Japanese: return "Japanese";
        case RestaurantType.FineDining: return "Fine Dining";
        case RestaurantType.Dessert: return "Dessert";
        default: throw new Error("Unreachable: Got " + restaurantType + " while trying to get chip name.");
    }
}