import { cn } from "../../utils/styles";

interface InfoItemProps {
    label: string;
    value: string;
    highlight?: boolean;
    className?: string;
}

export function InfoItem({
    label,
    value,
    highlight = false,
    className,
}: InfoItemProps) {
    return (
        <div
            className={cn(
                "p-3 rounded-lg",
                highlight ? "bg-blue-50 border border-blue-200" : "bg-gray-50",
                className
            )}
        >
            <p className="text-sm text-gray-600 mb-1">{label}</p>
            <p className={cn("font-semibold", highlight ? "text-blue-700" : "text-gray-800")}>
                {value}
            </p>
        </div>
    )
}