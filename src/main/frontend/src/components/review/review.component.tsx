import { Review } from "../../api/restaurants";
import "./review.component.css";

export function ReviewComponent({ review }: { review: Review }) {
    return <div className="review">
        <div className="review-header">
            <h3 className="review-name">{review.username ?? "Anonymous"}</h3>
            <div className="sub"><i className="bi bi-star-fill sub-icon"></i> {review.rating}</div>
        </div>
        {review.reviewText}
    </div>
}