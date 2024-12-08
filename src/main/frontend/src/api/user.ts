import { JWT_TOKEN_LOCAL_STORAGE_LOCATION } from "../utils/local-storage.consts";
import { RestaurantId } from "./restaurants";

export interface User {
    username: string;
    favorites: RestaurantId[];
}

export async function getUser(): Promise<User | null> {
    const token = localStorage.getItem(JWT_TOKEN_LOCAL_STORAGE_LOCATION);
    if (!token) return Promise.resolve(null);
    return fetch('/api/v1/account/favorites', {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
        }
    }).then(res => res.json());
}

export async function favoriteRestaurant(restaurantId: RestaurantId): Promise<Response | null> {
    const token = localStorage.getItem(JWT_TOKEN_LOCAL_STORAGE_LOCATION);
    if (!token) return Promise.resolve(null);
    return fetch(`/api/v1/account/favorites?restaurantId=${restaurantId}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
        }
    });
}

export async function unfavoriteRestaurant(restaurantId: RestaurantId): Promise<Response | null> {
    const token = localStorage.getItem(JWT_TOKEN_LOCAL_STORAGE_LOCATION);
    if (!token) return Promise.resolve(null);
    return fetch(`/api/v1/account/favorites?restaurantId=${restaurantId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
        }
    });
}

interface AuthenticationResponse {
    token: string;
}

export async function login(username: string, password: string): Promise<AuthenticationResponse> {
    return fetch("/api/v1/auth/authenticate", {
        method: "POST",
        body: JSON.stringify({
            username,
            password
        }),
        headers: {
            "Content-Type": "application/json"
        }
    }).then((res) => {
        if (res.ok) return res;
        throw new Error("Failed to log in")
    }).then((res) => res.json());
}

export async function register(username: string, password: string): Promise<AuthenticationResponse> {
    return fetch("/api/v1/auth/register", {
        method: "POST",
        body: JSON.stringify({
            username,
            password
        }),
        headers: {
            "Content-Type": "application/json"
        }
    }).then((res) => {
        if (res.ok) return res;
        throw new Error("Failed to register")
    }).then((res) => res.json());
}