import { useState } from "react";
import { cn } from "../../utils/classname";
import "./review-input.component.css";
import { useUIStateStore } from "../../stores/state.store";
import { useUser } from "../../queries/user.query";

export function ReviewInput() {
    const [rating, setRating] = useState(0);
    const isReviewing = useUIStateStore((state) => state.isReviewingSelectedRestaurant);

    const { data: user } = useUser();

    return <div className="review">
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
            <input className="restaurant-review-input" type="text" autoFocus={isReviewing} placeholder="Leave a review..." min={5} max={256} />
            {rating > 0 &&
                <button><i className="bi bi-chevron-right"></i></button>
            }
        </div>
    </div>
}