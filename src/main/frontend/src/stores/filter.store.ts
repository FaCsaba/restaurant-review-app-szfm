import { create } from "zustand";
import { CoordsDto, RestaurantType } from "../api/restaurants";

interface FilterState {
    coords: CoordsDto;
    search?: string;
    types: RestaurantType[];
    setCoords: (coords: CoordsDto) => void;
    setSearch: (search?: string) => void;
    setType: (type: RestaurantType) => void;
    unsetType: (type: RestaurantType) => void;
}

export const useFilterStore = create<FilterState>((set) => ({
    coords: { latitude: 47.5316, longitude: 21.6273 },
    types: [],
    setCoords: (coords: CoordsDto) => set({ coords }),
    setSearch: (search?: string) => set({ search }),
    setType: (type: RestaurantType) => set((state) => state.types.includes(type) ? {} : { types: [...state.types, type] }),
    unsetType: (type: RestaurantType) => set((state) => ({ types: state.types.filter(t => t != type) }))
}))