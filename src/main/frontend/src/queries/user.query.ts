import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { favoriteRestaurant, getUser, login, register, unfavoriteRestaurant } from "../api/user";
import { RestaurantId } from "../api/restaurants";
import { JWT_TOKEN_LOCAL_STORAGE_LOCATION } from "../utils/local-storage.consts";

export function useUser() {
    return useQuery({
        queryKey: ['user'],
        queryFn: getUser,
    })
}

export function useFavoriteRestaurantMutation() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (restaurantId: RestaurantId) => favoriteRestaurant(restaurantId),
        onSuccess: () => queryClient.invalidateQueries(['user']),
    })
}

export function useUnfavoriteRestaurantMutation() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (restaurantId: RestaurantId) => unfavoriteRestaurant(restaurantId),
        onSuccess: () => queryClient.invalidateQueries(['user']),
    })
}

export function useLoginMutation() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ username, password }: { username: string, password: string }) => login(username, password),
        onSuccess: (res) => {
            localStorage.setItem(JWT_TOKEN_LOCAL_STORAGE_LOCATION, res.token);
            queryClient.invalidateQueries(['user'])
        },
    })
}

export function useRegisterMutation() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ username, password }: { username: string, password: string }) => register(username, password),
        onSuccess: (res) => {
            localStorage.setItem(JWT_TOKEN_LOCAL_STORAGE_LOCATION, res.token);
            queryClient.invalidateQueries(['user'])
        },
    })
}