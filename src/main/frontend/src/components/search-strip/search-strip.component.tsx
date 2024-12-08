import { useNavigate } from "react-router";
import { RestaurantType } from "../../api/restaurants";
import { useUser } from "../../queries/user.query";
import { cn } from "../../utils/classname";
import { Button } from "../button/button.component";
import { RestaurantTypeChip } from "../restaurant-type-chip/restaurant-type-chip.component";
import { SearchBar } from "../search-bar/search-bar.component";
import "./search-strip.component.css";

export function SearchStrip({ className, children, ...other }: React.HTMLAttributes<HTMLDivElement>) {
    return <div className={cn("search-strip", className)} {...other} >
        {children}
        <SearchBar />
        <div className="search-strip-filter-container">
            {Object.values(RestaurantType).map((t, i) => <RestaurantTypeChip key={i} restaurantType={t} />)}
        </div>
    </div>
}

export function SearchStripWithUser({ className, ...other}: React.HTMLAttributes<HTMLDivElement>) {
    const navigate = useNavigate();
    const { data: user } = useUser();

    return <SearchStrip {...other}>
        {!user && <Button onClick={() => navigate("/login")}><i className="bi bi-person-fill" /></Button>}
    </SearchStrip>;
}