import { CheckCircle, Target } from "lucide-react";
import { Badge } from "../../assets/components/ui/badge";
import type { UnitKompetensi as UnitKompetensiTypes } from "../../assets/types/cert";
import { cn } from "../../assets/utils/styles";
import { useState } from "react";
import { getTopUnits } from "../../assets/data/certs";
import { Card } from "../../assets/components/ui/card";
import { SectionTitle } from "../../assets/components/ui/section-title";

interface UnitCardProps {
    unit: UnitKompetensiTypes;
    index: number;
    isSelected: boolean;
    onClick: () => void;
}

function UnitCard({ unit, index, isSelected, onClick }: UnitCardProps) {
    return (
        <button
            onClick={onClick}
            className={cn(
                "p-4 rounded-lg border-2 transition-all text-left",
                isSelected
                    ? "border-blue-600 bg-blue-50 shadow-md"
                    : "border-gray-200 hover:border-blue-300"
            )}
        >
            <div className="flex items-start justify-between mb-2">
                <Badge
                    color={isSelected ? "blue" : "gray"}
                    size="sm"
                >
                    Unit {index + 1}
                </Badge>
                <CheckCircle
                    className={cn(
                        "w-5 h-5",
                        isSelected ? "text-blue-600" : "text-gray-400"
                    )}
                />
            </div>
            <h3 className="font-bold text-sm text-gray-800 mb-1">{unit.judul}</h3>
            <p className="text-xs text-gray-600 mb-2">{unit.kode}</p>
            <Badge color="purple" size="sm">
                {unit.kategori}
            </Badge>
        </button>
    )
}

function UnitDetail({ unit }: { unit: UnitKompetensiTypes }) {
    return (
        <div className="border-t-2 border-gray-200 pt-6 space-y-6">
            {/* Header */}
            <div className="bg-linear-to-r from-green-50 to-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{unit.judul}</h3>
                <p className="text-sm text-gray-600 mb-3">
                    Kode Unit: <span className="font-semibold text-gray-800">{unit.kode}</span>
                </p>
                <p className="text-gray-700 mb-4">{unit.deskripsi}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                    {unit.teknologi.map((tech, idx) => (
                        <span
                            key={idx}
                            className="bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700 border border-gray-300"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            {/* KUK (Kriteria Unjuk Kerja) */}
            <div className="bg-white border-2 border-green-200 rounded-lg p-6">
                <h4 className="font-bold text-green-800 text-lg mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Kriteria Unjuk Kerja (KUK)
                </h4>
                <p className="text-sm text-gray-600 mb-4 italic">
                    Berikut adalah bukti/hasil kerja yang dapat diukur untuk membuktikan kompetensi:
                </p>

                <ol className="space-y-3">
                    {unit.kuk.map((kriteria, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                            <span className="bg-green-600 text-white font-bold px-3 py-1 rounded-full text-sm min-w-10 text-center">
                                {idx + 1}
                            </span>
                            <span className="text-gray-700 flex-1 pt-1">{kriteria}</span>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    )
}

export function UnitKompetensi() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const topUnits = getTopUnits(3);

    return (
        <Card>
            <SectionTitle
                title="3 Unit Kompetensi Inti"
                icon={Target}
                subtitle="Unit kompetensi paling penting dalam skema sertifikasi"
            />

            {/* Unit Selector */}
            <div className="grid md:grid-cols-3 gap-4 mb-6">
                {topUnits.map((unit, index) => (
                    <UnitCard
                        key={unit.kode}
                        unit={unit}
                        index={index}
                        isSelected={selectedIndex === index}
                        onClick={() => setSelectedIndex(index)}
                    />
                ))}
            </div>

            {/* Selected Unit Detail */}
            <UnitDetail unit={topUnits[selectedIndex]} />
        </Card>
    )
}