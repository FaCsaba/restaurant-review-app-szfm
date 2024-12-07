import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getRestaurants, postReview, RestaurantId, RestaurantsFilter } from "../api/restaurants";

export function useRestaurants(filter: RestaurantsFilter) {
    return useQuery({
        queryKey: ['getRestaurants', filter],
        queryFn: () => getRestaurants(filter),
        initialData: [],
        staleTime: 0
    });
}

export function usePostReviewMutation() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ restaurantId, rating, reviewText }: { restaurantId: RestaurantId, rating: number, reviewText: string }) =>
            postReview(restaurantId, rating, reviewText),
        onSuccess: () => queryClient.invalidateQueries(['getRestaurants'])
    })
}