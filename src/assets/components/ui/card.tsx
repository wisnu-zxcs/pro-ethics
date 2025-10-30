import type { ReactNode } from "react";
import { cn } from "../../utils/styles";

interface CardProps {
    children: ReactNode;
    padding?: "none" | "sm" | "md" | "lg";
    className?: string;
    hoverable?: boolean;
}

export function Card({
    children,
    padding = "md",
    className,
    hoverable = false,
}: CardProps) {
    const paddings = {
        none: "",
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
    };

    return (
        <div
            className={cn(
                "bg-white rounded-lg shadow-lg border border-gray-200",
                paddings[padding],
                hoverable && "hover:shadow-xl transition-shadow duration-300",
                className
            )}
        >
            {children}
        </div>
    )
}