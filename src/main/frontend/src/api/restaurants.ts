type ReviewId = number & { __type: "review" };

export type Review = {
    id: ReviewId;
    rating: number;
    username: string;
    reviewText?: string | null;
}

export type RestaurnatLocation = {
    latitude: number;
    longitude: number;
    country: string;
    city: string;
    zip: string;
    addLine1: string;
    addLine2: string;
    addLine3: string;
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
    rating: number;
    topReview?: Review;
    reviews: Review[];
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
    return fetch('/api/v1/restaurant/filter', {
        body: JSON.stringify(filter),
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => res.json());
}

export async function postReview(restaurantId: RestaurantId, rating: number, reviewText: string): Promise<Response> {
    return fetch('/api/v1/review', {
        body: JSON.stringify({
            reviewText,
            rating,
            restaurantId,
        }),
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    });
}
