import { useState, useRef, useEffect } from "react";
import { Award, Briefcase, ChevronLeft, ChevronRight, ChevronDown, Sparkles, Zap } from "lucide-react";
import { cn } from "../../utils/styles";

interface ModuleSelectorProps {
    activeModule: "job" | "cert";
    onModuleChange: (module: "job" | "cert") => void;
}

export default function ModuleSelector({ activeModule, onModuleChange }: ModuleSelectorProps) {
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [currentTranslate, setCurrentTranslate] = useState(0);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const modules = [
        {
            key: "job" as const,
            label: "Tugas 5",
            title: "Lowongan Kerja",
            description: "Analisis lowongan Fullstack Developer",
            icon: Briefcase,
            gradient: "from-blue-500 via-indigo-500 to-purple-500",
            color: "blue",
            accentColor: "from-blue-400 to-indigo-400",
        },
        {
            key: "cert" as const,
            label: "Tugas 6",
            title: "Sertifikasi SKKNI",
            description: "Skema sertifikasi BNSP",
            icon: Award,
            gradient: "from-purple-500 via-pink-500 to-rose-500",
            color: "purple",
            accentColor: "from-purple-400 to-pink-400",
        },
    ];

    const activeIndex = modules.findIndex(m => m.key === activeModule);
    const activeModuleData = modules[activeIndex];

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Handle drag events
    const handleDragStart = (clientX: number) => {
        setIsDragging(true);
        setStartX(clientX);
    };

    const handleDragMove = (clientX: number) => {
        if (!isDragging) return;
        const diff = clientX - startX;
        setCurrentTranslate(diff);
    };

    const handleDragEnd = () => {
        setIsDragging(false);
        if (Math.abs(currentTranslate) > 50) {
            if (currentTranslate > 0 && activeIndex > 0) {
                onModuleChange(modules[activeIndex - 1].key);
            } else if (currentTranslate < 0 && activeIndex < modules.length - 1) {
                onModuleChange(modules[activeIndex + 1].key);
            }
        }
        setCurrentTranslate(0);
    };

    // Navigation
    const goToPrevious = () => activeIndex > 0 && onModuleChange(modules[activeIndex - 1].key);
    const goToNext = () => activeIndex < modules.length - 1 && onModuleChange(modules[activeIndex + 1].key);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") goToPrevious();
            if (e.key === "ArrowRight") goToNext();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [activeIndex]);

    return (
        <div className="mb-8">
            <div className="container mx-auto px-4">
                <div className="max-w-7xl mx-auto">
                    {/* Hero Section with Active Module */}
                    <div className="relative mb-6 overflow-hidden rounded-3xl">
                        {/* Animated Background */}
                        <div className={cn(
                            "absolute inset-0 bg-linear-to-br transition-all duration-700",
                            activeModuleData.gradient
                        )}>
                            {/* Animated Orbs */}
                            <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" />
                            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000" />

                            {/* Grid Pattern */}
                            <div className="absolute inset-0 opacity-10" style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                            }} />
                        </div>

                        {/* Content */}
                        <div className="relative z-10 px-8 py-6 text-white">
                            <div className="flex items-center justify-between">
                                {/* Left: Module Info */}
                                <div className="flex items-center gap-6">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-white/30 rounded-2xl blur-xl" />
                                        <div className="relative w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30 shadow-2xl">
                                            <activeModuleData.icon className="w-10 h-10 text-white" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <Sparkles className="w-4 h-4 text-yellow-300 animate-pulse" />
                                            <span className="text-sm font-bold text-white/90 uppercase tracking-wider">
                                                {activeModuleData.label}
                                            </span>
                                        </div>
                                        <h2 className="text-3xl font-bold mb-1">{activeModuleData.title}</h2>
                                        <p className="text-white/80 text-sm">{activeModuleData.description}</p>
                                    </div>
                                </div>

                                {/* Right: Module Selector Dropdown */}
                                <div className="relative" ref={dropdownRef}>
                                    <button
                                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                        className="flex items-center gap-3 px-5 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-xl border border-white/30 transition-all hover:scale-105 shadow-lg"
                                    >
                                        <Zap className="w-5 h-5" />
                                        <span className="font-semibold">Ganti Modul</span>
                                        <ChevronDown className={cn(
                                            "w-4 h-4 transition-transform duration-200",
                                            isDropdownOpen && "rotate-180"
                                        )} />
                                    </button>

                                    {/* Dropdown */}
                                    {isDropdownOpen && (
                                        <div className="absolute top-full right-0 mt-3 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden z-50 animate-fadeIn">
                                            {modules.map((module) => {
                                                const isActive = module.key === activeModule;
                                                return (
                                                    <button
                                                        key={module.key}
                                                        onClick={() => {
                                                            onModuleChange(module.key);
                                                            setIsDropdownOpen(false);
                                                        }}
                                                        className={cn(
                                                            "w-full px-5 py-4 flex items-center gap-4 transition-all relative group",
                                                            isActive
                                                                ? `bg-linear-to-r ${module.gradient} text-white`
                                                                : "text-gray-700 hover:bg-gray-50"
                                                        )}
                                                    >
                                                        <div className={cn(
                                                            "w-12 h-12 rounded-xl flex items-center justify-center transition-all shrink-0 shadow-lg",
                                                            isActive
                                                                ? "bg-white/20 backdrop-blur-sm"
                                                                : `bg-linear-to-br ${module.gradient}`
                                                        )}>
                                                            <module.icon className={cn(
                                                                "w-6 h-6",
                                                                isActive ? "text-white" : "text-white"
                                                            )} />
                                                        </div>
                                                        <div className="flex-1 text-left">
                                                            <p className="text-xs font-semibold opacity-80 mb-0.5">{module.label}</p>
                                                            <p className="font-bold">{module.title}</p>
                                                        </div>
                                                        {isActive && (
                                                            <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                                                        )}
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation & Card Stack Container */}
                    <div className="relative">
                        {/* Card Stack */}
                        <div
                            ref={containerRef}
                            className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4 relative overflow-hidden cursor-grab active:cursor-grabbing min-h-[140px]"
                            onMouseDown={(e) => handleDragStart(e.clientX)}
                            onMouseMove={(e) => handleDragMove(e.clientX)}
                            onMouseUp={handleDragEnd}
                            onMouseLeave={handleDragEnd}
                            onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
                            onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
                            onTouchEnd={handleDragEnd}
                        >
                            {modules.map((module, index) => {
                                const isActive = index === activeIndex;
                                const offset = (index - activeIndex) * 100;
                                const dragOffset = isDragging ? (currentTranslate / 5) : 0;

                                return (
                                    <button
                                        key={module.key}
                                        onClick={() => onModuleChange(module.key)}
                                        className={cn(
                                            "absolute inset-4 rounded-xl transition-all duration-500 flex items-center gap-5 px-6 overflow-hidden group",
                                            isActive
                                                ? `bg-linear-to-r ${module.gradient} text-white shadow-2xl scale-100 opacity-100 z-20`
                                                : "bg-gray-50 text-gray-400 opacity-0 scale-90 z-10"
                                        )}
                                        style={{
                                            transform: `translateX(${offset + dragOffset}%)`,
                                            pointerEvents: isActive ? 'auto' : 'none',
                                        }}
                                    >
                                        {/* Shimmer */}
                                        {isActive && (
                                            <div
                                                className="absolute inset-0 bg-linear-to-r from-transparent via-white/25 to-transparent"
                                                style={{ animation: "shimmer 3s infinite" }}
                                            />
                                        )}

                                        {/* Icon */}
                                        <div className={cn(
                                            "relative z-10 w-20 h-20 rounded-2xl flex items-center justify-center shrink-0 shadow-xl transition-all",
                                            isActive ? "bg-white/20 backdrop-blur-sm" : "bg-white"
                                        )}>
                                            <module.icon className={cn(
                                                "w-10 h-10 transition-all",
                                                isActive ? "text-white" : "text-gray-400"
                                            )} />
                                        </div>

                                        {/* Content */}
                                        <div className="relative z-10 flex-1 text-left">
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className={cn(
                                                    "text-xs font-bold uppercase tracking-wider",
                                                    isActive ? "text-white/90" : "text-gray-400"
                                                )}>
                                                    {module.label}
                                                </span>
                                                {isActive && <Sparkles className="w-3.5 h-3.5 text-yellow-300 animate-pulse" />}
                                            </div>
                                            <h3 className="text-2xl font-bold mb-1">{module.title}</h3>
                                            <p className={cn(
                                                "text-sm",
                                                isActive ? "text-white/80" : "text-gray-400"
                                            )}>
                                                {module.description}
                                            </p>
                                        </div>

                                        {/* Active Indicator */}
                                        {isActive && (
                                            <div className="relative z-10 flex flex-col items-center gap-1.5 shrink-0">
                                                <div className="w-3 h-3 rounded-full bg-white shadow-lg animate-bounce" />
                                                <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
                                            </div>
                                        )}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Navigation Buttons - Floating */}
                        <button
                            onClick={goToPrevious}
                            disabled={activeIndex === 0}
                            className={cn(
                                "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-xl z-30",
                                activeIndex === 0
                                    ? "bg-gray-200 text-gray-400 cursor-not-allowed opacity-50"
                                    : `bg-linear-to-br ${modules[activeIndex - 1]?.accentColor || 'from-gray-400 to-gray-500'} text-white hover:scale-110 hover:shadow-2xl active:scale-95`
                            )}
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>

                        <button
                            onClick={goToNext}
                            disabled={activeIndex === modules.length - 1}
                            className={cn(
                                "absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-xl z-30",
                                activeIndex === modules.length - 1
                                    ? "bg-gray-200 text-gray-400 cursor-not-allowed opacity-50"
                                    : `bg-linear-to-br ${modules[activeIndex + 1]?.accentColor || 'from-gray-400 to-gray-500'} text-white hover:scale-110 hover:shadow-2xl active:scale-95`
                            )}
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Indicator Dots */}
                    <div className="flex items-center justify-center gap-3 mt-6">
                        {modules.map((module, index) => (
                            <button
                                key={module.key}
                                onClick={() => onModuleChange(module.key)}
                                className={cn(
                                    "relative transition-all duration-300",
                                    index === activeIndex
                                        ? "w-12 h-3"
                                        : "w-3 h-3 hover:scale-125"
                                )}
                            >
                                <div className={cn(
                                    "absolute inset-0 rounded-full transition-all",
                                    index === activeIndex
                                        ? `bg-linear-to-r ${module.gradient} shadow-lg`
                                        : "bg-gray-300 hover:bg-gray-400"
                                )} />
                                {index === activeIndex && (
                                    <div className={cn(
                                        "absolute inset-0 rounded-full bg-linear-to-r blur-md opacity-60",
                                        module.gradient
                                    )} />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Hint */}
                    <div className="text-center mt-5">
                        <p className="text-xs text-gray-400 flex items-center justify-center gap-2">
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>Swipe, gunakan tombol, atau keyboard (← →) untuk navigasi</span>
                        </p>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes shimmer {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
                
                @keyframes fadeIn {
                    from { 
                        opacity: 0;
                        transform: translateY(-10px) scale(0.95);
                    }
                    to { 
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }
                
                .animate-fadeIn {
                    animation: fadeIn 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }

                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.7; }
                }

                .delay-1000 {
                    animation-delay: 1s;
                }
            `}</style>
        </div>
    )
}