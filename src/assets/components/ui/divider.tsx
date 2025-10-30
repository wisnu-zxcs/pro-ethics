import { cn } from "../../utils/styles";

interface DividerProps {
    label?: string;
    className?: string;
}

export function Divider({ label, className }: DividerProps) {
    if (label) {
        return (
            <div className={cn("flex items-center gap-4 my-6", className)}>
                <div className="flex-1 h-px bg-gray-200" />
                <span className="text-sm text-gray-500 font-medium">{label}</span>
                <div className="flex-1 h-px bg-gray-200" />
            </div>
        );
    }

    return <div className={cn("h-px bg-gray-200 my-6", className)} />;
}