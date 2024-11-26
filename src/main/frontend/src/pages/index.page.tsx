import { useQuery } from "@tanstack/react-query";
import { getRestaurants } from "../api/restaurants";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "./index.css";
import { useRef } from "react";
import { divIcon, Map } from "leaflet";
// FIXME: having a separate pin svg for map is kinda whack
// but I had to do it this way because Leaflet expects an html
// element in string and I can't manipulate the color of it
import pin from "../../assets/map-pin.svg";
import { RestaurantCard } from "../components/restaurant-card/restaurant-card.component";
import { SearchStrip } from "../components/search-strip/search-strip.component";
import { useUserLocation } from "../queries/user-location.query";
import { useRestaurants } from "../queries/restaurants.query";
import { useFilterStore } from "../stores/filter.store";
import { useShallow } from "zustand/shallow";

export function Index() {
    const mapRef = useRef<Map>(null);
    const { search, types, coords } = useFilterStore(useShallow((state) => ({ search: state.search, types: state.types, coords: state.coords })));
    useUserLocation(mapRef);

    const { isError: isErrorFetchingRestaurants, error: errorFetchingRestaurants, data: restaurants } = useRestaurants({ coords, search, types });

    if (isErrorFetchingRestaurants) return <p>Failed to fetch restaurants {(errorFetchingRestaurants as Error).message}</p>

    return (
        <>
            <SearchStrip />
            <MapContainer center={[coords.latitude, coords.longitude]} zoom={18} ref={mapRef} zoomControl={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {restaurants.map((restaurant, i) =>
                    <Marker key={i}
                        position={[restaurant.location.latitude, restaurant.location.longitude]}
                        icon={divIcon({ html: pin, className: "pin", iconSize: [32, 32], popupAnchor: [0, -32] })}
                    >
                        <RestaurantCard restaurant={restaurant} />
                    </Marker>)}
            </MapContainer>
        </>
    );
}