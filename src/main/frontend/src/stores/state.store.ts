import { create } from "zustand";
import { RestaurantId } from "../api/restaurants";

interface UIState {
    isSearching: boolean;
    selectedRestaurantId?: RestaurantId;
    isReviewingSelectedRestaurant: boolean;
    setIsSearching: (isSearching: boolean) => void;
    setSelectedRestaurant: (selectedRestaurantId?: RestaurantId) => void;
    setReviewedRestaurant: (selectedRestaurantId?: RestaurantId) => void;
}

export const useUIStateStore = create<UIState>((set) => ({
    isSearching: false,
    selectedRestaurant: undefined,
    isReviewingSelectedRestaurant: false,
    setIsSearching: (isSearching: boolean) => set({ isSearching }),
    setSelectedRestaurant: (selectedRestaurantId?: RestaurantId) => set({ selectedRestaurantId, isReviewingSelectedRestaurant: false }),
    setReviewedRestaurant: (selectedRestaurantId?: RestaurantId) => set({ selectedRestaurantId, isReviewingSelectedRestaurant: true })
}));