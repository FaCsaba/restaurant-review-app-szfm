import { useState } from "react";
import { cn } from "../../utils/classname";
import "./review-input.component.css";

export function ReviewInput() {
    const [rating, setRating] = useState(0);

    return <div className="review">
        <div className="review-header">
            <h3 className="review-name">Anonymous</h3>
            <div className="sub">
                <i className={cn("bi bi-star-fill sub-icon", rating > 0 ? "golden" : undefined)} onClick={() => setRating(1)} />
                <i className={cn("bi bi-star-fill sub-icon", rating > 1 ? "golden" : undefined)} onClick={() => setRating(2)} />
                <i className={cn("bi bi-star-fill sub-icon", rating > 2 ? "golden" : undefined)} onClick={() => setRating(3)} />
                <i className={cn("bi bi-star-fill sub-icon", rating > 3 ? "golden" : undefined)} onClick={() => setRating(4)} />
                <i className={cn("bi bi-star-fill sub-icon", rating > 4 ? "golden" : undefined)} onClick={() => setRating(5)} />
            </div>
        </div>
        <div className="restaurant-review-input-wrapper">
            <input className="restaurant-review-input" type="text" min={5} max={256} />
            {rating > 0 &&
                <button><i className="bi bi-chevron-right"></i></button>
            }
        </div>
    </div>
}