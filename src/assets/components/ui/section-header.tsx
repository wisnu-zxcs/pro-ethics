import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "../../utils/styles";

interface SectionHeaderProps {
    title: string;
    icon?: LucideIcon;
    subtitle?: string;
    children?: ReactNode;
    className?: string;
}

export function SectionHeader({
    title,
    icon: Icon,
    subtitle,
    children,
    className,
}: SectionHeaderProps) {
    return (
        <div className={cn("flex items-start justify-between mb-6", className)}>
            <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                    {Icon && <Icon className="text-blue-600" size={24} />}
                    <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
                </div>
                {subtitle && <p className="text-gray-600">{subtitle}</p>}
            </div>
            {children && <div className="flex gap-2">{children}</div>}
        </div>
    )
}