import type { ReactNode } from "react";
import type { ColorVariant, SizeVariant } from "../../types/ui";
import { cn, getColorClasses } from "../../utils/styles";

interface BadgeProps {
    children: ReactNode;
    color?: ColorVariant;
    size?: SizeVariant;
    className?: string;
}

export function Badge({
    children,
    color = "blue",
    size = "md",
    className,
}: BadgeProps) {
    const colors = getColorClasses(color);

    const sizes = {
        sm: "px-2 py-0.5 text-xs",
        md: "px-3 py-1 text-sm",
        lg: "px-4 py-1.5 text-base",
    };

    return (
        <span
            className={cn(
                "inline-flex items-center font-semibold rounded-full",
                colors.bg,
                "text-white",
                sizes[size],
                className
            )}
        >
            {children}
        </span>
    )
}