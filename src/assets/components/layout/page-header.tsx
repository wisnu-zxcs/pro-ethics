import type { LucideIcon } from "lucide-react";
import type { HeaderInfoItem } from "../../types/ui";
import type { ReactNode } from "react";
import { cn } from "../../utils/styles";

interface PageHeaderProps {
    title?: string;
    subtitle?: string;
    variant?: "simple" | "gradient";
    mainIcon?: LucideIcon;
    infoItems?: HeaderInfoItem[];
    children?: ReactNode;
    className?: string;
}

export function PageHeader({
    title,
    subtitle,
    variant = "gradient",
    mainIcon: MainIcon,
    infoItems,
    children,
    className,
}: PageHeaderProps) {
    const baseClasses = "rounded-2xl shadow-xl mb-12 p-8";

    const variantClasses = {
        simple: "bg-white text-gray-800",
        gradient: "bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white",
    };

    return (
        <header className={cn(baseClasses, variantClasses[variant], className)}>
            {/* Title Section */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex-1">
                    <h1 className="text-4xl font-bold mb-2">{title}</h1>
                    {subtitle && (
                        <p className={cn("text-lg", variant === "gradient" ? "text-blue-100" : "text-gray-600")}>
                            {subtitle}
                        </p>
                    )}
                </div>

                {MainIcon && (
                    <MainIcon
                        className={cn("w-20 h-20 opacity-80", variant === "gradient" ? "text-white" : "text-gray-700")}
                    />
                )}
            </div>

            {/* Info Items Grid */}
            {infoItems && infoItems.length > 0 && (
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                    {infoItems.map((item, i) => (
                        <div
                            key={i}
                            className={cn(
                                "p-4 rounded-lg",
                                variant === "gradient" ? "bg-white/20 backdrop-blur-md" : "bg-gray-50 border border-gray-200"
                            )}
                        >
                            <p className="font-semibold mb-1">{item.label}</p>
                            <p className="text-sm">{item.value}</p>
                            {item.description && <p className="text-xs opacity-80 mt-1">{item.description}</p>}
                        </div>
                    ))}
                </div>
            )}

            {/* Custom Children */}
            {children && <div className="mt-6">{children}</div>}
        </header>
    )
}