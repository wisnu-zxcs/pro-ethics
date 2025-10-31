import { useRef, useEffect } from "react";
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
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const activeTabRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (activeTabRef.current && scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const activeTab = activeTabRef.current;

            const scrollLeft = activeTab.offsetLeft - (container.offsetWidth / 2) + (activeTab.offsetWidth / 2);

            container.scrollTo({
                left: scrollLeft,
                behavior: 'smooth'
            });
        }
    }, [activeTab]);

    return (
        <nav className={cn("flex justify-center mb-8", className)}>
            <div className="relative max-w-full">
                <div
                    ref={scrollContainerRef}
                    className="bg-white rounded-lg shadow-md p-2 flex gap-2 overflow-x-auto scrollbar-hide scroll-smooth"
                    style={{
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                    }}
                >
                    {tabs.map(({ key, label }) => {
                        const isActive = activeTab === key;
                        return (
                            <button
                                key={key}
                                ref={isActive ? activeTabRef : null}
                                onClick={() => onChange(key)}
                                className={cn(
                                    "px-4 py-2 rounded-md font-medium transition-all duration-300 whitespace-nowrap shrink-0",
                                    isActive
                                        ? "bg-blue-600 text-white shadow-md opacity-100"
                                        : "text-gray-600 hover:bg-gray-50 opacity-40 hover:opacity-70"
                                )}
                            >
                                {label}
                            </button>
                        );
                    })}
                </div>
            </div>
        </nav>
    )
}