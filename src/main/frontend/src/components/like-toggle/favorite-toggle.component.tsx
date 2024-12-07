import { RestaurantId } from "../../api/restaurants";
import { useFavoriteRestaurantMutation, useUser } from "../../queries/user.query";
import "./favorite-toggle.component.css";

export function FavoriteToggle({ restaurantId }: { restaurantId: RestaurantId }) {
    const { data: user } = useUser();
    const { mutate } = useFavoriteRestaurantMutation();

    return <button className="like-button" onClick={() => mutate(restaurantId)}>{user?.favorites?.includes(restaurantId) ? <i className="bi bi-heart-fill danger" /> : <i className="bi bi-heart sub-icon" />}</button>;
}