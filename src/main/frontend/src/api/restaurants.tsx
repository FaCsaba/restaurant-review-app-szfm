type ReviewId = number & { __type: "review" };

export type Review = {
    id: ReviewId;
    rating: number;
    username: string;
    content?: string | null;
}

export type RestaurnatLocation = {
    latitude: number;
    longitude: number;
    country: string;
    city: string;
    zip: string;
    addressLine1: string;
    addressLine2: string;
    addressLine3: string;
}

export enum RestaurantType {
    FastFood = "FAST_FOOD",
    Healthy = "HEALTHY",
    American = "AMERICAN",
    Chinese = "CHINESE",
    Cafe = "CAFE",
    Japanese = "JAPANESE",
    FineDining = "FINE_DINING",
    Dessert = "DESSERT",
}

export type RestaurantId = number & { __type: "restaurant" };

export type Restaurant = {
    id: RestaurantId;
    name: string;
    description: string;
    restaurantType: RestaurantType;
    location: RestaurnatLocation;
    avgRating: number;
    topReview?: Review;
    isLiked: boolean;
}

export type CoordsDto = {
    latitude: number;
    longitude: number;
}

export type RestaurantsFilter = {
    types?: RestaurantType[];
    search?: string;
    coords?: CoordsDto;
}

export async function getRestaurants(filter: RestaurantsFilter): Promise<Restaurant[]> {
    return fetch('/api/restaurant/filter', {
        body: JSON.stringify(filter),
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => res.json());
}