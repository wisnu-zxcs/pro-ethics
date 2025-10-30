import { FileText } from "lucide-react";
import { Card } from "../../assets/components/ui/card";
import { SectionHeader } from "../../assets/components/ui/section-header";
import type { Job } from "../../assets/types/job";
import { UI } from "../../assets/config/ui";
import { takeFirst } from "../../assets/utils/array";

// MAIN COMPARISON TABLE
interface ComparisonTableProps {
    jobs: Job[];
}

// STANDARD ROW
interface StandardRowProps {
    label: string;
    values: string[];
    valueClassName?: string;
    bgClassName?: string;
}

// SKILL ROW
interface SkillRowProps {
    label: string;
    note?: string;
    jobs: Job[];
    skillType: "hardSkills" | "softSkills";
    bgClassName?: string;
}

// TABLE HEADER
function TableHeader({ jobs }: { jobs: Job[] }) {
    return (
        <thead className="bg-gray-50">
            <tr>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 border-b-2 sticky left-0 bg-gray-50 z-10">
                    Kriteria
                </th>
                {jobs.map((_, idx) => (
                    <th
                        key={idx}
                        className="px-6 py-4 text-left text-sm font-bold text-gray-700 border-b-2 whitespace-nowrap"
                    >
                        Lowongan {idx + 1}
                    </th>
                ))}
            </tr>
        </thead>
    )
}

// TABLE BODY
function TableBody({ jobs }: { jobs: Job[] }) {
    return (
        <tbody className="divide-y divide-gray-200">
            <StandardRow label="Nama Perusahaan" values={jobs.map(j => j.company)} />
            <StandardRow label="Job Role" values={jobs.map(j => j.role)} />
            <StandardRow label="Pengalaman Minimum" values={jobs.map(j => j.experience)} />
            <StandardRow
                label="Gaji"
                values={jobs.map(j => j.salary)}
                valueClassName="text-green-600 font-semibold"
            />
            <StandardRow label="Pendidikan Minimum" values={jobs.map(j => j.education)} />

            <SkillRow
                label="Hard Skills"
                note="3 Teratas"
                jobs={jobs}
                skillType="hardSkills"
                bgClassName="bg-blue-50"
            />

            <SkillRow
                label="Soft Skills"
                note="2 Teratas"
                jobs={jobs}
                skillType="softSkills"
                bgClassName="bg-purple-50"
            />

            <StandardRow label="Sertifikasi" values={jobs.map(j => j.certification)} />
            <StandardRow label="Lokasi" values={jobs.map(j => j.location)} />
        </tbody>
    )
}

// STANDARD ROW COMPONENT
function StandardRow({ label, values, valueClassName = "text-gray-700", bgClassName }: StandardRowProps) {
    return (
        <tr className={`hover:bg-gray-50 ${bgClassName || ""}`}>
            <td className="px-6 py-4 font-semibold text-gray-800 sticky left-0 bg-white z-10">
                {label}
            </td>
            {values.map((value, idx) => (
                <td key={idx} className={`px-6 py-4 ${valueClassName}`}>
                    {value}
                </td>
            ))}
        </tr>
    )
}

// SKILL ROW COMPONENT
function SkillRow({ label, note, jobs, skillType, bgClassName }: SkillRowProps) {
    const maxSkills = skillType === "hardSkills" ? UI.MAX_HARD_SKILLS : UI.MAX_SOFT_SKILLS;

    return (
        <tr className={`hover:bg-gray-50 ${bgClassName || ""}`}>
            <td className="px-6 py-4 font-semibold text-gray-800 sticky left-0 bg-white z-10">
                <div>
                    {label}
                    {note && (
                        <div className="text-sm font-normal text-gray-600 mt-1">{note}</div>
                    )}
                </div>
            </td>
            {jobs.map((job, idx) => (
                <td key={idx} className="px-6 py-4">
                    <ol className="list-decimal list-inside space-y-1 text-gray-700 text-sm">
                        {takeFirst(job[skillType], maxSkills).map((skill, skillIdx) => (
                            <li key={skillIdx} className="leading-relaxed">{skill}</li>
                        ))}
                    </ol>
                </td>
            ))}
        </tr>
    )
}

// MAIN COMPARISON TABLE COMPONENT
export function ComparisonTable({ jobs }: ComparisonTableProps) {
    return (
        <Card padding="none">
            <div className="bg-linear-to-r from-indigo-600 to-blue-600 p-6 text-white">
                <SectionHeader
                    title="Tabel Perbandingan Lowongan Kerja"
                    icon={FileText}
                    className="mb-0 [&_h2]:text-white [&_svg]:text-white"
                />
            </div>
            <div className="overflow-x-auto">
                <table className="w-full">
                    <TableHeader jobs={jobs} />
                    <TableBody jobs={jobs} />
                </table>
            </div>
        </Card>
    )
}