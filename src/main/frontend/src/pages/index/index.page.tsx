import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "./index.css";
import { useRef } from "react";
import { divIcon, Map } from "leaflet";
import pin from "../../../assets/map-pin.svg";
import { RestaurantCard } from "../../components/restaurant-card/restaurant-card.component";
import { SearchStripWithUser } from "../../components/search-strip/search-strip.component";
import { useUserLocation } from "../../queries/user-location.query";
import { useRestaurants } from "../../queries/restaurants.query";
import { useFilterStore } from "../../stores/filter.store";
import { useShallow } from "zustand/shallow";
import { useUIStateStore } from "../../stores/state.store";
import { SearchOverlay } from "../../components/search-overlay/search-overlay.component";
import { RestaurantView } from "../../components/restaurant-view/restaurant-view.component";

export function Index() {
    const mapRef = useRef<Map>(null);
    const filter = useFilterStore(useShallow((state) => ({ search: state.search, types: state.types, coords: state.coords })));
    const isSearching = useUIStateStore((state) => state.isSearching)
    const selectedRestaurantId = useUIStateStore((state) => state.selectedRestaurantId);
    useUserLocation(mapRef);
    
    const { isError: isErrorFetchingRestaurants, error: errorFetchingRestaurants, data: restaurants } = useRestaurants(filter);
    const selectedRestaurant = restaurants.find(r => r.id === selectedRestaurantId);

    if (isErrorFetchingRestaurants) return <p>Failed to fetch restaurants {(errorFetchingRestaurants as Error).message}</p>

    return (
        <>
            {(!isSearching && !selectedRestaurant) && <SearchStripWithUser />}
            {isSearching && <SearchOverlay restaurants={restaurants} />}
            {selectedRestaurant && <RestaurantView restaurant={selectedRestaurant} />}
            <MapContainer center={[filter.coords.latitude, filter.coords.longitude]} zoom={18} ref={mapRef} zoomControl={false}>
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