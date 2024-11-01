import { Popup } from "react-leaflet";
import { Restaurant } from "../api/restaurants";

export function RestaurantCard({ restaurant }: { restaurant: Restaurant }) {
    return (
        <Popup keepInView closeButton={false} autoPan>
            { restaurant.name }
        </Popup>
    );
}