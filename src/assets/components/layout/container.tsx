import type { ReactNode } from "react";
import { cn } from "../../utils/styles";

interface ContainerProps {
    children: ReactNode;
    maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
    className?: string;
    noPadding?: boolean;
}

export function Container({
    children,
    maxWidth = "xl",
    className,
    noPadding = false,
}: ContainerProps) {
    const maxWidths = {
        sm: "max-w-screen-sm",
        md: "max-w-screen-md",
        lg: "max-w-screen-lg",
        xl: "max-w-screen-xl",
        "2xl": "max-w-screen-2xl",
        full: "max-w-full",
    };

    return (
        <div className={cn(
            "container mx-auto",
            !noPadding && "px-4 py-8",
            maxWidths[maxWidth],
            className
        )}>
            {children}
        </div>
    )
}