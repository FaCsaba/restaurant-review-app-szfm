import { useState } from "react";
import { RestaurantType } from "../../api/restaurants";
import { Button } from "../button/button.component";
import { getChipLogoBasedOnRestaurantType, getChipNameBasedOnRestaurantType } from "../../utils/chips";
import { cn } from "../../utils/classname";
import "./restaurant-type-chip.component.css";

export function RestaurantTypeChip({ restaurantType }: { restaurantType: RestaurantType }) {
    const [isActive, setIsActive] = useState(false);

    return <Button onClick={() => setIsActive(a => !a)} className={cn("restaurant-type-chip", isActive ? "selected" : "")}>
        {getChipLogoBasedOnRestaurantType(restaurantType)} {getChipNameBasedOnRestaurantType(restaurantType)}
    </Button>
}