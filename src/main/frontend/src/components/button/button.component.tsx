import { cn } from "../../utils/classname";
import "./button.component.css";

export function Button({ children, className, ...other }: React.HTMLAttributes<HTMLButtonElement>) {
    return <button className={cn("button", className)} {...other}><>{children}</></button>
}