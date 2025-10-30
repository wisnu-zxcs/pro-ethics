import { cn } from "../../utils/styles";

interface ListProps {
    items: string[];
    icon?: "check" | "bullet" | "number";
    className?: string;
}

export function List({ items, icon = "bullet", className }: ListProps) {
    const icons = {
        check: "✓",
        bullet: "•",
        number: null,
    };

    return (
        <ul className={cn("space-y-2", className)}>
            {items.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-700">
                    {icon === "number" ? (
                        <span className="font-semibold min-w-5">{index + 1}.</span>
                    ) : (
                        <span className="text-green-500 mt-0.5">{icons[icon]}</span>
                    )}
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    )
}