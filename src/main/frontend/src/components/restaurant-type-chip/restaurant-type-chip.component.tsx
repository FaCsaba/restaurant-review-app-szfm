import { useState } from "react";
import { RestaurantType } from "../../api/restaurants";
import { Button } from "../button/button.component";
import { getChipLogoBasedOnRestaurantType, getChipNameBasedOnRestaurantType } from "../../utils/chips";
import { cn } from "../../utils/classname";
import "./restaurant-type-chip.component.css";
import { useFilterStore } from "../../stores/filter.store";

export function RestaurantTypeChip({ restaurantType }: { restaurantType: RestaurantType }) {
    const [isActive, setIsActive] = useState(false);
    const setType = useFilterStore(state => state.setType);
    const unsetType = useFilterStore(state => state.unsetType);

    const onClickAction = () => setIsActive(a => { !a ? setType(restaurantType) : unsetType(restaurantType); return !a });

    return <Button onClick={onClickAction} className={cn("restaurant-type-chip", isActive ? "selected" : "")}>
        {getChipLogoBasedOnRestaurantType(restaurantType)} {getChipNameBasedOnRestaurantType(restaurantType)}
    </Button>
}