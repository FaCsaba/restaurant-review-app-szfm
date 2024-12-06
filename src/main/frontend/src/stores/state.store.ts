import { create } from "zustand";
import { Restaurant } from "../api/restaurants";

interface UIState {
    isSearching: boolean;
    selectedRestaurant?: Restaurant;
    isReviewingSelectedRestaurant: boolean;
    setIsSearching: (isSearching: boolean) => void;
    setSelectedRestaurant: (selectedRestaurant?: Restaurant) => void;
    setReviewedRestaurant: (selectedRestaurant?: Restaurant) => void;
}

export const useUIStateStore = create<UIState>((set) => ({
    isSearching: false,
    selectedRestaurant: undefined,
    isReviewingSelectedRestaurant: false,
    setIsSearching: (isSearching: boolean) => set({ isSearching }),
    setSelectedRestaurant: (selectedRestaurant?: Restaurant) => set({ selectedRestaurant, isReviewingSelectedRestaurant: false }),
    setReviewedRestaurant: (selectedRestaurant?: Restaurant) => set({ selectedRestaurant, isReviewingSelectedRestaurant: true })
}));