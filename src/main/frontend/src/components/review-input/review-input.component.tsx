import { FormEvent, useState } from "react";
import { cn } from "../../utils/classname";
import "./review-input.component.css";
import { useUIStateStore } from "../../stores/state.store";
import { useUser } from "../../queries/user.query";
import { usePostReviewMutation } from "../../queries/restaurants.query";
import { RestaurantId } from "../../api/restaurants";

export function ReviewInput({ restaurantId }: { restaurantId: RestaurantId }) {
    const [rating, setRating] = useState(0);
    const [reviewText, setReviewText] = useState('');
    const isReviewing = useUIStateStore((state) => state.isReviewingSelectedRestaurant);
    const { mutate: postReview } = usePostReviewMutation();

    const { data: user } = useUser();

    function onLoginSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        postReview({ restaurantId, rating, reviewText })
    }

    return <form className="review" onSubmit={onLoginSubmit}>
        <div className="review-header">
            <h3 className="review-name">{user?.username ?? "Anonymous"}</h3>
            <div className="sub">
                <i className={cn("bi bi-star-fill icon-button", rating > 0 ? "golden" : "sub-icon")} onClick={() => setRating(1)} />
                <i className={cn("bi bi-star-fill icon-button", rating > 1 ? "golden" : "sub-icon")} onClick={() => setRating(2)} />
                <i className={cn("bi bi-star-fill icon-button", rating > 2 ? "golden" : "sub-icon")} onClick={() => setRating(3)} />
                <i className={cn("bi bi-star-fill icon-button", rating > 3 ? "golden" : "sub-icon")} onClick={() => setRating(4)} />
                <i className={cn("bi bi-star-fill icon-button", rating > 4 ? "golden" : "sub-icon")} onClick={() => setRating(5)} />
            </div>
        </div>
        <div className="restaurant-review-input-wrapper">
            <input className="restaurant-review-input" type="text" autoFocus={isReviewing} placeholder="Leave a review..." min={5} max={256}
                value={reviewText} onChange={(e) => setReviewText(e.target.value)} />
            {rating > 0 &&
                <button type="submit"><i className="bi bi-chevron-right"></i></button>
            }
        </div>
    </form>
}