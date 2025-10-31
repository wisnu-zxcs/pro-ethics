import { APP_CONFIG } from "../../config/app";
import { cn } from "../../utils/styles";
import { Code, Heart, ExternalLink } from "lucide-react";

interface PageFooterProps {
    year?: number;
    className?: string;
}

export function PageFooter({
    year = APP_CONFIG.year,
    className,
}: PageFooterProps) {
    return (
        <footer className={cn("relative", className)}>
            {/* Top Wave Decoration */}
            <div className="absolute inset-x-0 top-0">
                <svg
                    viewBox="0 0 1440 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-6"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0 0h1440v48c-240-48-480-48-720-24C480 48 240 48 0 24V0z"
                        fill="currentColor"
                        className="text-pink-50"
                    />
                </svg>
            </div>

            <div className="bg-linear-to-br from-blue-600 via-indigo-700 to-purple-800 text-white pt-16">
                <div className="container mx-auto px-4">
                    {/* Main Footer Content */}
                    <div className="grid md:grid-cols-3 gap-8 pb-8 border-b border-white/20">
                        {/* Brand Section */}
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center">
                                    <Code className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">Analisis Profesi TI</h3>
                                    <p className="text-xs text-blue-200">DFJ Team Project</p>
                                </div>
                            </div>
                            <p className="text-sm text-blue-100 leading-relaxed">
                                Platform analisis komprehensif untuk penelusuran lowongan kerja dan skema sertifikasi BNSP.
                            </p>
                        </div>

                        {/* Tech Stack */}
                        <div>
                            <h4 className="font-bold mb-4 flex items-center gap-2">
                                <Code className="w-4 h-4" />
                                Tech Stack
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Lucide Icons'].map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs font-medium hover:bg-white/20 transition-all cursor-default"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="font-bold mb-4">Quick Links</h4>
                            <div className="space-y-2 text-sm">
                                <a href="#job-analysis" className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors">
                                    <ExternalLink className="w-4 h-4" />
                                    Tugas 5: Analisis Lowongan Kerja
                                </a>
                                <a href="#certification" className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors">
                                    <ExternalLink className="w-4 h-4" />
                                    Tugas 6: Sertifikasi SKKNI
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4">
                        {/* Copyright */}
                        <div className="text-sm text-blue-100">
                            <p className="flex items-center gap-2 justify-center md:justify-start">
                                Copyright © {year} - Built with
                                <Heart className="w-4 h-4 text-red-400 animate-pulse" />
                                by DFJ Team
                            </p>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-3">
                            <a
                                href="https://github.com/wisnu-zxcs/dfj-dashboard"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all"
                                aria-label="GitHub"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github-icon lucide-github">
                                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                                    <path d="M9 18c-4.51 2-5-2-7-2" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}