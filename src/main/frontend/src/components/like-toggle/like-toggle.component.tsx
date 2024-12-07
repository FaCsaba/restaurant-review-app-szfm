import { RestaurantId } from "../../api/restaurants";
import { useUser } from "../../queries/user.query";
import "./like-toggle.component.css";

export function LikeToggle({ restaurantId }: { restaurantId: RestaurantId }) {
    const { data: user } = useUser();

    return <button className="like-button">{user?.favorites?.includes(restaurantId) ? <i className="bi bi-heart-fill danger" /> : <i className="bi bi-heart sub-icon" />}</button>;
}