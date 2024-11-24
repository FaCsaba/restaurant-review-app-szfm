import { cn } from "../../utils/classname";
import "./search-bar.component.css";

export function SearchBar({ className, ...other }: React.HTMLAttributes<HTMLInputElement>) {
    return <div className={cn("search-bar", className)}>
        <i className="bi bi-search icon" />
        <input className="search-bar-input" type="search" placeholder="Search..." {...other} />
    </div>
}