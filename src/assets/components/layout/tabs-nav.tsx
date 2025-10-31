import { cn } from "../../utils/styles";

interface TabNavigationProps {
    tabs: Array<{ key: string; label: string }>;
    activeTab: string;
    onChange: (key: string) => void;
    className?: string;
}

export function TabNavigation({
    tabs,
    activeTab,
    onChange,
    className,
}: TabNavigationProps) {
    return (
        <nav className={cn("flex justify-center mb-8", className)}>
            <div className="bg-white rounded-lg shadow-md p-2 inline-flex flex-wrap gap-2">
                {tabs.map(({ key, label }) => (
                    <button
                        key={key}
                        onClick={() => onChange(key)}
                        className={cn(
                            "px-4 py-2 rounded-md font-medium transition-all",
                            activeTab === key
                                ? "bg-blue-600 text-white shadow-md"
                                : "text-gray-600 hover:bg-gray-50"
                        )}
                    >
                        {label}
                    </button>
                ))}
            </div>
        </nav>
    )
}