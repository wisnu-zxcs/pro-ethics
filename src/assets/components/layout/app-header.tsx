import { Calendar, GraduationCap, Users, Sparkles, Code } from "lucide-react";
import { cn } from "../../utils/styles";
import { APP_CONFIG } from "../../config/app";

interface AppHeaderProps {
    className?: string;
}

export function AppHeader({ className }: AppHeaderProps) {
    return (
        <header className={cn("relative overflow-hidden mb-8", className)}>
            {/* Gradient Background with Pattern */}
            <div className="bg-linear-to-br from-blue-600 via-indigo-700 to-purple-800 relative">
                {/* Decorative Elements */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzMuMzEgMCA2LTIuNjkgNi02cy0yLjY5LTYtNi02LTYgMi42OS02IDYgMi42OSA2IDYgNnptMCAxMmMzLjMxIDAgNi0yLjY5IDYtNnMtMi42OS02LTYtNi02IDIuNjktNiA2IDIuNjkgNiA2IDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />

                <div className="container mx-auto px-4 pt-8 pb-12 relative z-10">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

                        {/* Left: Main Title Section */}
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">
                                    <Code className="w-7 h-7 text-white" />
                                </div>
                                <div>
                                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white flex items-center gap-2">
                                        Analisis Profesi & Sertifikasi TI
                                        <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-yellow-300 animate-pulse" />
                                    </h1>
                                </div>
                            </div>
                            <p className="text-blue-100 text-sm md:text-base max-w-2xl">
                                Platform analisis komprehensif untuk penelusuran lowongan kerja dan skema sertifikasi BNSP bidang Teknologi Informasi
                            </p>
                        </div>

                        {/* Right: Info Cards */}
                        <div className="flex flex-wrap gap-3">
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3 hover:bg-white/20 transition-all">
                                <div className="flex items-center gap-2 mb-1">
                                    <GraduationCap className="w-4 h-4 text-blue-200" />
                                    <span className="text-xs text-blue-200 font-medium">Mata Kuliah</span>
                                </div>
                                <p className="text-white font-bold text-sm">Etika Profesi</p>
                            </div>

                            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3 hover:bg-white/20 transition-all">
                                <div className="flex items-center gap-2 mb-1">
                                    <Users className="w-4 h-4 text-purple-200" />
                                    <span className="text-xs text-purple-200 font-medium">Tim</span>
                                </div>
                                <p className="text-white font-bold text-sm">DFJ Team</p>
                            </div>

                            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3 hover:bg-white/20 transition-all">
                                <div className="flex items-center gap-2 mb-1">
                                    <Calendar className="w-4 h-4 text-green-200" />
                                    <span className="text-xs text-green-200 font-medium">Tahun</span>
                                </div>
                                <p className="text-white font-bold text-sm">{APP_CONFIG.year}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Wave Decoration */}
                <div className="absolute inset-x-0 bottom-0">
                    <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-6">
                        <path d="M0 48h1440V0c-240 48-480 48-720 24C480 0 240 0 0 24v24z" fill="currentColor" className="text-gray-50" />
                    </svg>
                </div>
            </div>
        </header>
    )
}