import { create } from "zustand";
import { Restaurant } from "../api/restaurants";

interface UIState {
    isSearching: boolean;
    selectedRestaurant?: Restaurant;
    setIsSearching: (isSearching: boolean) => void;
    setSelectedRestaurnat: (selectedRestaurant: Restaurant) => void;
}

export const useUIStateStore = create<UIState>((set) => ({
    isSearching: false,
    selectedRestaurant: undefined,
    setIsSearching: (isSearching: boolean) => set({ isSearching }),
    setSelectedRestaurnat: (selectedRestaurant: Restaurant) => set({ selectedRestaurant })
}));