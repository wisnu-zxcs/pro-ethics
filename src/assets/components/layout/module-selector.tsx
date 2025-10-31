import { useRef, useEffect } from "react";
import { Award, Briefcase, Home } from "lucide-react";
import { cn } from "../../utils/styles";

interface ModuleSelectorProps {
    activeModule: "job" | "cert";
    onModuleChange: (module: "job" | "cert") => void;
}

export function ModuleSelector({ activeModule, onModuleChange }: ModuleSelectorProps) {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const activeModuleRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (activeModuleRef.current && scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const activeButton = activeModuleRef.current;

            const scrollLeft = activeButton.offsetLeft - (container.offsetWidth / 2) + (activeButton.offsetWidth / 2);

            container.scrollTo({
                left: scrollLeft,
                behavior: 'smooth'
            });
        }
    }, [activeModule]);

    const modules = [
        {
            key: "job" as const,
            label: "Tugas 5: Lowongan Kerja",
            icon: Briefcase,
            gradient: "from-blue-600 to-indigo-600",
            hoverGradient: "hover:from-blue-700 hover:to-indigo-700",
        },
        {
            key: "cert" as const,
            label: "Tugas 6: Sertifikasi SKKNI",
            icon: Award,
            gradient: "from-purple-600 to-pink-600",
            hoverGradient: "hover:from-purple-700 hover:to-pink-700",
        },
    ];

    return (
        <div className="mb-8">
            <div className="container mx-auto px-4">
                <div className="flex items-center gap-4">
                    <div className="shrink-0">
                        <button
                            className="p-6 bg-white rounded-xl shadow-lg border-2 border-gray-200 flex items-center justify-center hover:border-blue-400 hover:shadow-xl transition-all group"
                            aria-label="Home"
                        >
                            <Home className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors" />
                        </button>
                    </div>

                    {/* Module Selector */}
                    <div className="flex-1 relative">
                        {/* Modules Container */}
                        <div
                            ref={scrollContainerRef}
                            className="bg-white rounded-xl shadow-lg p-3 flex gap-3 overflow-x-auto scrollbar-hide scroll-smooth border-2 border-gray-200"
                            style={{
                                scrollbarWidth: 'none',
                                msOverflowStyle: 'none',
                            }}
                        >
                            {modules.map(({ key, label, icon: Icon, gradient, hoverGradient }) => {
                                const isActive = activeModule === key;
                                return (
                                    <button
                                        key={key}
                                        ref={isActive ? activeModuleRef : null}
                                        onClick={() => onModuleChange(key)}
                                        className={cn(
                                            "relative px-6 py-4 rounded-lg font-medium transition-all duration-300 whitespace-nowrap shrink-0 inline-flex items-center gap-3 overflow-hidden group",
                                            isActive
                                                ? `bg-linear-to-r ${gradient} text-white shadow-xl scale-105 opacity-100`
                                                : `bg-gray-50 text-gray-600 hover:bg-gray-100 opacity-40 hover:opacity-100 ${hoverGradient}`
                                        )}
                                    >
                                        {/* Background active */}
                                        {isActive && (
                                            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                                        )}

                                        {/* Icon */}
                                        <div className={cn(
                                            "relative z-10 w-8 h-8 rounded-lg flex items-center justify-center transition-all",
                                            isActive
                                                ? "bg-white/20 backdrop-blur-sm"
                                                : "bg-white group-hover:scale-110"
                                        )}>
                                            <Icon
                                                className={cn(
                                                    "w-5 h-5 transition-colors",
                                                    isActive ? "text-white" : "text-gray-700"
                                                )}
                                            />
                                        </div>

                                        {/* Label */}
                                        <span className="relative z-10 font-semibold">
                                            {label}
                                        </span>

                                        {/* Active indicator dot */}
                                        {isActive && (
                                            <div className="relative z-10 w-2 h-2 rounded-full bg-white animate-pulse" />
                                        )}
                                    </button>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}