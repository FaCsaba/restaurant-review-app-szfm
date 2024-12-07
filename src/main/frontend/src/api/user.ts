import { RestaurantId } from "./restaurants";

export interface User {
    username: string;
    favorites: RestaurantId[];
}

export async function getUser(): Promise<User> {
    return fetch('/api/v1/account/favorites', {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => res.json());
}

export async function favoriteRestaurant(restaurantId: RestaurantId): Promise<Response> {
    return fetch(`/api/v1/account/favorites?restaurantId=${restaurantId}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    });
}
