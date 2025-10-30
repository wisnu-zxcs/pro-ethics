import { ExternalLink, FileText } from "lucide-react";
import { Card } from "../../assets/components/ui/card";
import { SectionHeader } from "../../assets/components/ui/section-header";
import { Badge } from "../../assets/components/ui/badge";
import { cn } from "../../assets/utils/styles";

interface ComparisonRowProps {
    skkni: string;
    industry: string;
    match: number;
    isMissing?: boolean;
}

interface StatCardProps {
    value: string;
    label: string;
    color: "green" | "orange" | "red";
}

function ComparisonTable() {
    return (
        <Card padding="none">
            <div className="bg-linear-to-r from-purple-600 to-blue-600 p-6 text-white">
                <SectionHeader
                    title="Perbandingan: SKKNI vs Kebutuhan Industri"
                    icon={FileText}
                    className="mb-0 [&_h2]:text-white [&_svg]:text-white"
                />
            </div>
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead className="bg-linear-to-r from-purple-600 to-blue-600 text-white">
                        <tr>
                            <th className="p-4 text-left border-b-2">Unit Kompetensi SKKNI</th>
                            <th className="p-4 text-left border-b-2">Skills dari Lowongan Kerja</th>
                            <th className="p-4 text-center border-b-2">Match</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm">
                        <ComparisonRow
                            skkni="Mengimplementasikan User Interface"
                            industry="React.js, HTML5, CSS3, Responsive Design (82%)"
                            match={95}
                        />
                        <ComparisonRow
                            skkni="Menerapkan bahasa pemrograman"
                            industry="JavaScript ES6+, TypeScript (100%)"
                            match={90}
                        />
                        <ComparisonRow
                            skkni="Menulis kode sesuai guidelines"
                            industry="ESLint, Prettier, Best Practices (73%)"
                            match={100}
                        />
                        <ComparisonRow
                            skkni="[Belum dicakup SKKNI]"
                            industry="Backend: Node.js, Express, Laravel (73%)"
                            match={0}
                            isMissing
                        />
                        <ComparisonRow
                            skkni="[Belum dicakup SKKNI]"
                            industry="Database: PostgreSQL, MySQL (91%)"
                            match={0}
                            isMissing
                        />
                        <ComparisonRow
                            skkni="[Belum dicakup SKKNI]"
                            industry="RESTful API Development (100%)"
                            match={0}
                            isMissing
                        />
                    </tbody>
                </table>
            </div>
            <div className="p-6 grid md:grid-cols-3 gap-4">
                <StatCard
                    value="87%"
                    label="Frontend Skills Coverage"
                    color="green"
                />
                <StatCard
                    value="45%"
                    label="Total Coverage (Frontend + Backend)"
                    color="orange"
                />
                <StatCard
                    value="0%"
                    label="DevOps & Cloud Coverage"
                    color="red"
                />
            </div>
            <div className="px-6 pb-6">
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-sm text-gray-700">
                        <strong>Kesimpulan:</strong> Sertifikasi BNSP sangat kuat untuk{" "}
                        <span className="font-semibold text-blue-700">frontend development</span>,
                        tetapi perlu dilengkapi dengan pembelajaran mandiri untuk backend, database, dan DevOps.
                    </p>
                </div>
            </div>
        </Card>
    )
}


function ComparisonRow({ skkni, industry, match, isMissing = false }: ComparisonRowProps) {
    const getMatchColor = (value: number) => {
        if (value >= 80) return "green";
        if (value >= 50) return "orange";
        return "red";
    };

    return (
        <tr className={cn("border-b hover:bg-gray-50", isMissing && "bg-red-50")}>
            <td className="p-4 text-gray-700">{skkni}</td>
            <td className="p-4 text-gray-700">{industry}</td>
            <td className="p-4 text-center">
                <Badge color={getMatchColor(match) as any}>
                    {match}%
                </Badge>
            </td>
        </tr>
    )
}

function StatCard({ value, label, color }: StatCardProps) {
    const colors = {
        green: "bg-green-50 border-green-300 text-green-800",
        orange: "bg-orange-50 border-orange-300 text-orange-800",
        red: "bg-red-50 border-red-300 text-red-800",
    };

    return (
        <div className={cn("p-4 border rounded-lg", colors[color])}>
            <p className="font-bold text-center text-2xl mb-2">{value}</p>
            <p className="text-sm text-center text-gray-700">{label}</p>
        </div>
    )
}

function ConnectionSection() {
    return (
        <Card className="border-2 border-indigo-300">
            <SectionHeader
                title="Hubungan dengan Analisis Lowongan (Tugas 5)"
                icon={ExternalLink}
            />
            <div className="space-y-4">
                <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                    <h3 className="font-bold text-indigo-700 mb-3">Keselarasan Kompetensi</h3>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                            <p className="font-semibold text-gray-800 mb-2">Unit SKKNI:</p>
                            <ul className="space-y-1 text-gray-700">
                                <li>• Implementasi UI (HTML/CSS/JS)</li>
                                <li>• Pemrograman Terstruktur</li>
                                <li>• Code Best Practices</li>
                                <li>• Library Integration</li>
                            </ul>
                        </div>
                        <div>
                            <p className="font-semibold text-gray-800 mb-2">Hard Skills dari Lowongan:</p>
                            <ul className="space-y-1 text-gray-700">
                                <li>• React.js, HTML5, CSS3 (82%)</li>
                                <li>• JavaScript ES6+ (100%)</li>
                                <li>• Git, Testing, Clean Code (73%)</li>
                                <li>• NPM, Bootstrap, Frameworks (64%)</li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-4 p-3 bg-green-100 border border-green-300 rounded">
                        <p className="text-sm text-green-800 font-semibold">
                            ✓ Coverage Rate: 85-90% dari hard skills yang dibutuhkan industri tercakup!
                        </p>
                    </div>
                </div>
                <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                    <h3 className="font-bold text-yellow-700 mb-2">Gap yang Perlu Diisi Sendiri</h3>
                    <p className="text-sm text-gray-700 mb-2">
                        Untuk posisi entry-level yang kompetitif, tambahkan:
                    </p>
                    <ul className="text-sm text-gray-700 space-y-1 ml-4">
                        <li>• Backend framework (Node.js/Express atau Laravel)</li>
                        <li>• Database (PostgreSQL/MySQL) dan query optimization</li>
                        <li>• RESTful API development</li>
                        <li>• Git workflow (branching, PR, code review)</li>
                        <li>• Basic DevOps (deployment, CI/CD)</li>
                    </ul>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <h3 className="font-bold text-blue-700 mb-3">Roadmap: Sertifikasi ke Job-Ready</h3>
                    <div className="space-y-3 text-sm">
                        {[
                            { step: 1, text: "Dapatkan sertifikasi BNSP Junior Web Developer" },
                            { step: 2, text: "Bangun 3-5 portfolio projects (full-stack)" },
                            { step: 3, text: "Tambahkan skills backend via online courses" },
                            { step: 4, text: "Praktikkan Git workflow dan cloud deployment" },
                            { step: 5, text: "Apply ke posisi Junior Developer!" },
                        ].map(({ step, text }) => (
                            <div key={step} className="flex items-start gap-3">
                                <Badge color="blue" size="sm">STEP {step}</Badge>
                                <span className="text-gray-700 flex-1">{text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Card>
    )
}

export function CertificationComparison() {
    return (
        <div className="space-y-8">
            <ComparisonTable />
            <ConnectionSection />
        </div>
    )
}