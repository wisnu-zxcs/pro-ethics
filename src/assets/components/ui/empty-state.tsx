import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

interface EmptyStateProps {
    icon?: LucideIcon;
    title: string;
    description?: string;
    action?: ReactNode;
}

export function EmptyState({
    icon: Icon,
    title,
    description,
    action,
}: EmptyStateProps) {
    return (
        <div className="text-center py-12">
            {Icon && (
                <div className="flex justify-center mb-4">
                    <Icon className="text-gray-400" size={48} />
                </div>
            )}
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
            {description && (
                <p className="text-gray-600 mb-6 max-w-md mx-auto">{description}</p>
            )}
            {action && <div>{action}</div>}
        </div>
    )
}