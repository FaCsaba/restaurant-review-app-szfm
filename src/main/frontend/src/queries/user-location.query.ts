import { useQuery } from "@tanstack/react-query";
import { Map } from "leaflet";
import { RefObject } from "react";
import { CoordsDto } from "../api/restaurants";
import { useFilterStore } from "../stores/filter.store";

export function useUserLocation(mapRef: RefObject<Map>) {
    const initialData = useFilterStore((state) => state.coords);
    const setCoords = useFilterStore((state) => state.setCoords);

    return useQuery({
        queryKey: ['userLocation'],
        queryFn: async () => new Promise<CoordsDto>((res, rej) =>
            navigator.geolocation.getCurrentPosition(({ coords }) => res(coords), rej)
        ),
        onSuccess: (coords) => {
            mapRef.current?.flyTo([coords.latitude, coords.longitude], 18, { animate: false });
            setCoords(coords)
        },
        initialData,
        refetchOnWindowFocus: false,
    });
}