import "./button.component.css";

function cn(base: string, other?: string) {
    return [base, other].join(" ");
}

export function Button({ children, className }: React.HTMLAttributes<HTMLButtonElement>) {
    return <button className={cn("button", className)}><>{children}</></button>
}