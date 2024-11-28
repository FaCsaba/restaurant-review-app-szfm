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

export async function getRestaurants(filter?: RestaurantsFilter): Promise<Restaurant[]> {
    const dummy: Restaurant[] = [
        {
            id: 1 as RestaurantId,
            name: "Burger Haven",
            description: "The best burgers in town with a variety of toppings.",
            restaurantType: RestaurantType.FastFood,
            location: {
                latitude: 40.7128,
                longitude: -74.0060,
                country: "USA",
                city: "New York",
                zip: "10001",
                addressLine1: "123 Burger St",
                addressLine2: "",
                addressLine3: "Near Central Park"
            },
            avgRating: 4.5,
            topReview: {
                id: 101 as ReviewId,
                rating: 5,
                username: "foodie123",
                content: "Absolutely loved the burgers! Juicy and flavorful."
            },
            isLiked: false,
        },
        {
            id: 2 as RestaurantId,
            name: "Sushi World",
            description: "Authentic Japanese sushi and sashimi.",
            restaurantType: RestaurantType.Japanese,
            location: {
                latitude: 34.0522,
                longitude: -118.2437,
                country: "USA",
                city: "Los Angeles",
                zip: "90001",
                addressLine1: "456 Sushi Ave",
                addressLine2: "Suite 100",
                addressLine3: "Downtown LA"
            },
            avgRating: 4.8,
            isLiked: false,
        },
        {
            id: 3 as RestaurantId,
            name: "Healthy Bites",
            description: "Fresh and healthy meals made with organic ingredients.",
            restaurantType: RestaurantType.Healthy,
            location: {
                latitude: 37.7749,
                longitude: -122.4194,
                country: "USA",
                city: "San Francisco",
                zip: "94103",
                addressLine1: "789 Health St",
                addressLine2: "",
                addressLine3: "Near the Ferry Building"
            },
            avgRating: 4.2,
            topReview: {
                id: 103 as ReviewId,
                rating: 4,
                username: "healthNut",
                content: "Great place for a healthy meal! Love the salads."
            },
            isLiked: false,
        },
        {
            id: 4 as RestaurantId,
            name: "Sweet Tooth",
            description: "Desserts and pastries that will satisfy your cravings.",
            restaurantType: RestaurantType.Dessert,
            location: {
                latitude: 41.8781,
                longitude: -87.6298,
                country: "USA",
                city: "Chicago",
                zip: "60601",
                addressLine1: "321 Sweet St",
                addressLine2: "Floor 2",
                addressLine3: "Near Millennium Park"
            },
            avgRating: 4.7,
            isLiked: true,
        },
        {
            id: 5 as RestaurantId,
            name: "Pasta Paradise",
            description: "Delicious homemade pasta with a variety of sauces.",
            restaurantType: RestaurantType.American,
            location: {
                latitude: 30.2672,
                longitude: -97.7431,
                country: "USA",
                city: "Austin",
                zip: "73301",
                addressLine1: "654 Pasta Rd",
                addressLine2: "",
                addressLine3: "South Congress"
            },
            avgRating: 4.6,
            isLiked: false,
        }
    ];
    return dummy;
}