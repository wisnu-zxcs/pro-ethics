import type { ComponentType, ReactNode } from "react";
import { Card } from "../../assets/components/ui/card";
import { SectionTitle } from "../../assets/components/ui/section-title";
import { Award, DollarSign, Target, TrendingUp } from "lucide-react";

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

export function CertificationConclusion() {
    return (
        <Card className="bg-linear-to-r from-orange-50 to-red-50 border-2 border-orange-300">
            <SectionTitle
                title="Kesimpulan & Analisis Relevansi"
                icon={TrendingUp}
                className="mb-6"
            />
            <div className="space-y-6">
                {/* Section 1: Industry Relevance */}
                <ConclusionSection
                    title="1. Relevansi dengan Kebutuhan Industri"
                    icon={Target}
                    iconColor="text-blue-600"
                >
                    <p className="text-gray-700 leading-relaxed">
                        Skema sertifikasi "Pengembang Web Pratama" sangat relevan dengan kebutuhan industri. Berdasarkan analisis lowongan kerja pada Tugas 5, <strong>85-90% dari hard skills yang dibutuhkan industri tercakup dalam unit kompetensi ini</strong>, terutama:
                    </p>
                    <ul className="mt-3 space-y-2 text-gray-700 ml-4">
                        <li className="flex items-start gap-2">
                            <span className="text-blue-600 mt-1">✓</span>
                            <span>Implementasi UI (React, HTML/CSS) - match 95%</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-blue-600 mt-1">✓</span>
                            <span>Pemrograman terstruktur (JavaScript) - match 90%</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-blue-600 mt-1">✓</span>
                            <span>Best practices coding - match 100%</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-blue-600 mt-1">✓</span>
                            <span>Library integration (NPM, frameworks) - match 90%</span>
                        </li>
                    </ul>
                </ConclusionSection>

                {/* Section 2: Importance for IT Graduates */}
                <ConclusionSection
                    title="2. Pentingnya bagi Lulusan TI"
                    icon={Award}
                    iconColor="text-green-600"
                >
                    <p className="text-gray-700 leading-relaxed mb-3">
                        Sertifikasi BNSP ini <strong>sangat penting dan strategis</strong> bagi lulusan TI:
                    </p>
                    <div className="space-y-3">
                        <div className="bg-white p-4 rounded-lg border border-green-200">
                            <p className="font-semibold text-green-700 mb-2">
                                ① Pengakuan Formal Kompetensi
                            </p>
                            <p className="text-sm text-gray-700">
                                Memberikan sertifikat yang diakui nasional dan dapat diverifikasi secara online
                            </p>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-green-200">
                            <p className="font-semibold text-green-700 mb-2">
                                ② Meningkatkan Daya Saing
                            </p>
                            <p className="text-sm text-gray-700">
                                64% lowongan entry-level menyebutkan sertifikasi sebagai nilai tambah
                            </p>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-green-200">
                            <p className="font-semibold text-green-700 mb-2">
                                ③ Validasi Kemampuan Praktis
                            </p>
                            <p className="text-sm text-gray-700">
                                Uji demonstrasi sesuai real-world requirements, bukan hanya teori
                            </p>
                        </div>
                    </div>
                </ConclusionSection>

                {/* Section 3: Gap Analysis */}
                <ConclusionSection
                    title="3. Gap Analysis: Kampus vs Sertifikasi"
                    icon={TrendingUp}
                    iconColor="text-purple-600"
                >
                    <div className="space-y-3">
                        <div className="bg-white p-4 rounded-lg border border-purple-200">
                            <p className="font-semibold text-purple-700 mb-2">
                                Kekuatan Sertifikasi BNSP
                            </p>
                            <p className="text-sm text-gray-700">
                                Fokus pada skills praktis dan employability (coding standards, best practices, library integration) yang sering kurang ditekankan di kampus.
                            </p>
                        </div>

                        <div className="bg-white p-4 rounded-lg border border-purple-200">
                            <p className="font-semibold text-purple-700 mb-2">
                                Komplementer dengan Pendidikan Formal
                            </p>
                            <p className="text-sm text-gray-700">
                                Kampus memberikan foundation teoritis (algoritma, struktur data), sementara sertifikasi BNSP memvalidasi kemampuan implementasi praktis.
                            </p>
                        </div>

                        <div className="bg-white p-4 rounded-lg border border-purple-200">
                            <p className="font-semibold text-purple-700 mb-2 flex items-center gap-2">
                                <DollarSign className="w-4 h-4" />
                                ROI (Return on Investment)
                            </p>
                            <p className="text-sm text-gray-700">
                                Biaya Rp 1-1.5 juta, masa berlaku 3 tahun. Fresh graduate dengan sertifikasi BNSP memiliki starting salary <strong>15-20% lebih tinggi</strong> (Rp 6-7 juta vs Rp 5-6 juta untuk non-certified).
                            </p>
                        </div>
                    </div>
                </ConclusionSection>

                {/* Recommendation Strategy */}
                <div className="bg-linear-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                        <Award className="w-6 h-6" />
                        Rekomendasi Strategi
                    </h3>
                    <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                            <span className="font-bold">→</span>
                            <span>Ambil sertifikasi di semester 6-7 setelah menguasai fundamental programming</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="font-bold">→</span>
                            <span>Persiapkan portofolio 3-5 web projects untuk memperkuat asesmen</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="font-bold">→</span>
                            <span>Kombinasikan dengan sertifikasi vendor (AWS, React) untuk maksimalkan CV</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="font-bold">→</span>
                            <span>Update sertifikat setiap 3 tahun untuk tetap relevan</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="font-bold">→</span>
                            <span>Isi gap skills (backend, database, DevOps) melalui online learning</span>
                        </li>
                    </ul>
                </div>
            </div>
        </Card>
    )
}