import { Calendar, GraduationCap, Users } from "lucide-react";
import { cn } from "../../utils/styles";
import { APP_CONFIG } from "../../config/app";

interface AppHeaderProps {
    className?: string;
}

export function AppHeader({ className }: AppHeaderProps) {
    return (
        <header className={cn("bg-white border-b-2 border-gray-200 shadow-sm mb-8", className)}>
            <div className="container mx-auto px-4 py-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                    {/* Left: App Title & Description */}
                    <div className="flex-1">
                        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">
                            Analisis Profesi & Sertifikasi TI
                        </h1>
                        <p className="text-gray-600 text-sm">
                            Platform Penelusuran Lowongan Kerja dan Skema Sertifikasi BNSP
                        </p>
                    </div>

                    {/* Right: Academic Info */}
                    <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2 text-gray-700">
                            <GraduationCap className="w-4 h-4 text-blue-600" />
                            <span className="font-medium">Etika Profesi</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-700">
                            <Users className="w-4 h-4 text-purple-600" />
                            <span className="font-medium">DFJ Team</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-700">
                            <Calendar className="w-4 h-4 text-green-600" />
                            <span className="font-medium">{APP_CONFIG.year}</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}