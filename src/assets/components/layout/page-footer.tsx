import { APP_CONFIG } from "../../config/app";
import { cn } from "../../utils/styles";

interface PageFooterProps {
    year?: number;
    className?: string;
}

export function PageFooter({
    year = APP_CONFIG.year,
    className,
}: PageFooterProps) {
    return (
        <footer className={cn("mt-12 text-center text-gray-500 text-sm", className)}>
            <p>© {year} - Analisis Profesi & Sertifikasi TI</p>
            <p className="mt-2 text-xs">Built with React + TypeScript + Tailwind CSS</p>
        </footer>
    );
}