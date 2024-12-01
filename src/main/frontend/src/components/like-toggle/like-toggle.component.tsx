import "./like-toggle.component.css";

export function LikeToggle({ isLiked }: { isLiked: boolean }) {
    return <button className="like-button">{isLiked ? <i className="bi bi-heart-fill danger" /> : <i className="bi bi-heart sub-icon" />}</button>;
}