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
import { RestaurantCard } from "../components/restaurant-card.component";

export function Index() {
    const mapRef = useRef<Map>(null);

    const { data: { coords } } = useQuery({
        queryKey: ['userLocation'],
        queryFn: async () => new Promise<GeolocationPosition>((res, rej) => {
            navigator.geolocation.getCurrentPosition((a) => { console.log(a); res(a) }, rej);
        }),
        onSuccess: ({ coords }) =>
            mapRef.current?.flyTo([coords.latitude, coords.longitude], 18, { animate: false }),
        initialData: { coords: { latitude: 40.7128, longitude: -74.0060 } } as GeolocationPosition,
        refetchOnWindowFocus: false,
    });
    const { isError: isErrorFetchingRestaurants, error: errorFetchingRestaurants, data: restaurants } = useQuery({
        queryKey: ['getRestaurants', coords],
        queryFn: () => getRestaurants({ coords: coords }),
        initialData: [],
    });

    if (isErrorFetchingRestaurants) return <p>Failed to fetch restaurants {(errorFetchingRestaurants as Error).message}</p>

    return (
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
    );
}