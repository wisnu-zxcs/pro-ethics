import type { LucideIcon } from "lucide-react";
import type { HeaderInfoItem } from "../../types/ui";
import type { ComponentType, ReactNode } from "react";
import { cn } from "../../utils/styles";

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    icon?: LucideIcon | ComponentType<{ className?: string }>;
    variant?: "simple" | "gradient";
    infoItems?: HeaderInfoItem[];
    children?: ReactNode;
    className?: string;
}

export function SectionHeader({
    title,
    subtitle,
    icon: Icon,
    variant = "gradient",
    infoItems,
    children,
    className,
}: SectionHeaderProps) {
    const baseClasses = "rounded-2xl shadow-xl mb-8 p-8 transition-all duration-300";

    const variantClasses = {
        simple: "bg-white text-gray-800 border-2 border-gray-200",
        gradient: "bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white",
    };

    return (
        <div className={cn(baseClasses, variantClasses[variant], className)}>

            {/* Title Section */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                        {Icon && (
                            <Icon
                                className={cn(
                                    "w-8 h-8",
                                    variant === "gradient" ? "text-white" : "text-blue-600"
                                )}
                            />
                        )}
                        <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
                    </div>
                    {subtitle && (
                        <p className={cn(
                            "text-base md:text-lg",
                            variant === "gradient" ? "text-blue-100" : "text-gray-600"
                        )}>
                            {subtitle}
                        </p>
                    )}
                </div>
            </div>

            {/* Info Items Grid */}
            {infoItems && infoItems.length > 0 && (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                    {infoItems.map((item, i) => (
                        <div
                            key={i}
                            className={cn(
                                "p-4 rounded-lg transition-all hover:scale-[1.02]",
                                variant === "gradient"
                                    ? "bg-white/20 backdrop-blur-md"
                                    : "bg-gray-50 border border-gray-200"
                            )}
                        >
                            <p className="font-semibold mb-1">{item.label}</p>
                            <p className="text-sm">{item.value}</p>
                            {item.description && (
                                <p className="text-xs opacity-80 mt-1">{item.description}</p>
                            )}
                        </div>
                    ))}
                </div>
            )}

            {children && <div className="mt-6">{children}</div>}
        </div>
    )
}