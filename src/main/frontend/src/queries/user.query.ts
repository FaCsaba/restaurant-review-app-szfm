import { useMutation, useQuery } from "@tanstack/react-query";
import { favoriteRestaurant, getUser } from "../api/user";
import { RestaurantId } from "../api/restaurants";

export function useUser() {
    return useQuery({
        queryKey: ['user'],
        queryFn: getUser,
    })
}

export function useFavoriteRestaurantMutation() {
    return useMutation({
        mutationKey: ['user'],
        mutationFn: (restaurantId: RestaurantId) => favoriteRestaurant(restaurantId),
    })
}