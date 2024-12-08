import { RestaurantId } from "../../api/restaurants";
import { useFavoriteRestaurantMutation, useUser } from "../../queries/user.query";
import "./favorite-toggle.component.css";

export function FavoriteToggle({ restaurantId }: { restaurantId: RestaurantId }) {
    const { data: user } = useUser();
    const { mutate: favorite } = useFavoriteRestaurantMutation();
    const { mutate: unfavorite } = useFavoriteRestaurantMutation();

    const isFavorite = user?.favorites?.includes(restaurantId);

    return <button
        className="like-button"
        onClick={() => isFavorite ? unfavorite(restaurantId) : favorite(restaurantId)}
    >
        {isFavorite ?
            <i className="bi bi-heart-fill danger" /> :
            <i className="bi bi-heart sub-icon" />}
    </button>;
}