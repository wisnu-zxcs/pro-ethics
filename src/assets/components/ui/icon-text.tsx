import type { LucideIcon } from "lucide-react";
import { cn } from "../../utils/styles";

interface IconTextProps {
    icon: LucideIcon;
    text: string;
    iconColor?: string;
    className?: string;
}

export function IconText({
    icon: Icon,
    text,
    iconColor = "text-blue-500",
    className,
}: IconTextProps) {
    return (
        <div className={cn("flex items-center gap-2", className)}>
            <Icon className={iconColor} size={16} />
            <span className="text-sm">{text}</span>
        </div>
    )
}