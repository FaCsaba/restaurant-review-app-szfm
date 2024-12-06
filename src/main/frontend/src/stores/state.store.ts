import { create } from "zustand";
import { Restaurant } from "../api/restaurants";

interface UIState {
    isSearching: boolean;
    selectedRestaurant?: Restaurant;
    setIsSearching: (isSearching: boolean) => void;
    setSelectedRestaurant: (selectedRestaurant?: Restaurant) => void;
}

export const useUIStateStore = create<UIState>((set) => ({
    isSearching: false,
    selectedRestaurant: undefined,
    setIsSearching: (isSearching: boolean) => set({ isSearching }),
    setSelectedRestaurant: (selectedRestaurant?: Restaurant) => set({ selectedRestaurant })
}));