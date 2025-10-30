import type { ReactNode } from "react";
import { cn } from "../../utils/styles";

interface PageWrapperProps {
    children: ReactNode;
    className?: string;
}

export function PageWrapper({ children, className }: PageWrapperProps) {
    return (
        <div
            className={cn(
                "min-h-screen bg-linear-to-br from-blue-50 via-purple-50 to-pink-50",
                className
            )}
        >
            {children}
        </div>
    )
}