import { useQuery } from "@tanstack/react-query";
import { getRestaurants, RestaurantsFilter } from "../api/restaurants";

export function useRestaurants(filter: RestaurantsFilter) {
    return useQuery({
        queryKey: ['getRestaurants', filter],
        queryFn: () => getRestaurants(filter),
        initialData: [],
        staleTime: 0
    });
}