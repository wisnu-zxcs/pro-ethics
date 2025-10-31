import { Award, Lightbulb, Target, TrendingUp } from "lucide-react";
import { Card } from "../../assets/components/ui/card";
import { SectionTitle } from "../../assets/components/ui/section-title";
import type { ComponentType, ReactNode } from "react";

interface ConclusionSectionProps {
    title: string;
    icon: ComponentType<{ size?: number; className?: string }>;
    iconColor: string;
    children: ReactNode;
}

function ConclusionSection({ title, icon: Icon, iconColor, children }: ConclusionSectionProps) {
    return (
        <div className="bg-white p-6 rounded-lg border border-orange-200">
            <div className="flex items-center gap-2 mb-4">
                <Icon size={24} className={iconColor} />
                <h3 className="font-bold text-orange-700 text-lg">{title}</h3>
            </div>
            {children}
        </div>
    )
}

export function JobConclusion() {
    return (
        <div className="space-y-6">
            <Card className="bg-linear-to-r from-orange-50 to-red-50 border-2 border-orange-300">
                <SectionTitle
                    title="Kesimpulan Analisis Lowongan Kerja"
                    icon={TrendingUp}
                    className="mb-6"
                />

                <div className="space-y-6">
                    <ConclusionSection
                        title="1. Kebutuhan Skill Industri"
                        icon={Target}
                        iconColor="text-blue-600"
                    >
                        <p className="text-gray-700 leading-relaxed mb-3">
                            Berdasarkan analisis 5+ lowongan Fullstack Developer, terdapat pola konsisten dalam kebutuhan skill industri:
                        </p>
                        <ul className="space-y-2 text-gray-700 ml-4">
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 mt-1">•</span>
                                <span><strong>Frontend (100%):</strong> React.js, HTML5, CSS3, JavaScript ES6+ menjadi requirement wajib</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 mt-1">•</span>
                                <span><strong>Backend (80%):</strong> Node.js/Express atau PHP/Laravel untuk server-side development</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 mt-1">•</span>
                                <span><strong>Database (90%):</strong> PostgreSQL, MySQL, atau MongoDB untuk data management</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 mt-1">•</span>
                                <span><strong>Tools (100%):</strong> Git version control adalah skill fundamental yang tidak bisa ditawar</span>
                            </li>
                        </ul>
                    </ConclusionSection>

                    <ConclusionSection
                        title="2. Rentang Gaji & Pengalaman"
                        icon={TrendingUp}
                        iconColor="text-green-600"
                    >
                        <div className="space-y-3 text-gray-700">
                            <div className="flex items-start gap-3">
                                <div className="bg-green-100 px-3 py-1 rounded font-bold text-green-800 shrink-0">
                                    Fresh Graduate
                                </div>
                                <div>
                                    <p className="font-semibold">Rp 5.5 - 8 juta/bulan</p>
                                    <p className="text-sm text-gray-600">0-1 tahun pengalaman, fokus pada fundamental skills</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="bg-blue-100 px-3 py-1 rounded font-bold text-blue-800 shrink-0">
                                    Junior (1-2 tahun)
                                </div>
                                <div>
                                    <p className="font-semibold">Rp 7 - 10 juta/bulan</p>
                                    <p className="text-sm text-gray-600">Mulai handle project mandiri, understanding business logic</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="bg-purple-100 px-3 py-1 rounded font-bold text-purple-800 shrink-0">
                                    Mid-level (2-3 tahun)
                                </div>
                                <div>
                                    <p className="font-semibold">Rp 9 - 13 juta/bulan</p>
                                    <p className="text-sm text-gray-600">Leadership skills, mentoring junior, architectural decisions</p>
                                </div>
                            </div>
                        </div>
                    </ConclusionSection>

                    <ConclusionSection
                        title="3. Pentingnya Soft Skills"
                        icon={Award}
                        iconColor="text-purple-600"
                    >
                        <p className="text-gray-700 leading-relaxed mb-3">
                            Soft skills yang paling dicari employer:
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-purple-50 p-4 rounded-lg">
                                <p className="font-semibold text-purple-800 mb-2">✓ Problem Solving (100%)</p>
                                <p className="text-sm text-gray-600">Kemampuan analytical thinking untuk solve complex problems</p>
                            </div>
                            <div className="bg-purple-50 p-4 rounded-lg">
                                <p className="font-semibold text-purple-800 mb-2">✓ Team Collaboration (100%)</p>
                                <p className="text-sm text-gray-600">Komunikasi efektif dengan tim lintas fungsi</p>
                            </div>
                            <div className="bg-purple-50 p-4 rounded-lg">
                                <p className="font-semibold text-purple-800 mb-2">✓ Continuous Learning (80%)</p>
                                <p className="text-sm text-gray-600">Adaptif terhadap teknologi dan framework baru</p>
                            </div>
                            <div className="bg-purple-50 p-4 rounded-lg">
                                <p className="font-semibold text-purple-800 mb-2">✓ Time Management (60%)</p>
                                <p className="text-sm text-gray-600">Mampu prioritas task dan meet deadline</p>
                            </div>
                        </div>
                    </ConclusionSection>

                    <div className="bg-linear-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg">
                        <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                            <Lightbulb className="w-6 h-6" />
                            Rekomendasi untuk Fresh Graduate
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                                <span className="font-bold">→</span>
                                <span>Fokus master fundamental: HTML/CSS/JS + React + Node.js + Database</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="font-bold">→</span>
                                <span>Bangun 3-5 portfolio projects yang showcase full-stack capabilities</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="font-bold">→</span>
                                <span>Dapatkan sertifikasi BNSP atau vendor (AWS, React) untuk nilai tambah CV</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="font-bold">→</span>
                                <span>Aktif di GitHub, contribute ke open source untuk networking</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="font-bold">→</span>
                                <span>Practice coding challenges (LeetCode, HackerRank) untuk technical interview</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </Card>
        </div>
    )
}