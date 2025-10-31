import { AlertCircle, Award, FileText, GraduationCap, Users } from "lucide-react";
import { Card } from "../../assets/components/ui/card";
import { SectionTitle } from "../../assets/components/ui/section-title";
import { certificationData } from "../../assets/data/certs";
import { InfoItem } from "../../assets/components/ui/info-item";
import { List } from "../../assets/components/ui/list";

function SchemeInfo() {
    const data = certificationData;

    return (
        <Card>
            <SectionTitle
                title="Informasi Skema Sertifikasi"
                icon={FileText}
                subtitle="Detail lengkap skema sertifikasi BNSP untuk Junior Web Developer"
            />
            <div className="grid md:grid-cols-2 gap-4 mb-6">
                <InfoItem
                    label="Nama Skema"
                    value={data.namaSkema}
                    highlight
                />
                <InfoItem
                    label="Kode Skema"
                    value={data.kodeSkema}
                />
                <InfoItem
                    label="Jenis Skema"
                    value={data.jenisSkema}
                />
                <InfoItem
                    label="Lembaga Sertifikasi"
                    value={data.lsp}
                />
                <InfoItem
                    label="Status Lisensi"
                    value={data.lisensiLSP}
                />
                <InfoItem
                    label="Level KKNI"
                    value={data.levelKKNI}
                />
                <InfoItem
                    label="Masa Berlaku"
                    value={data.masaBerlaku}
                />
                <InfoItem
                    label="Estimasi Biaya"
                    value={data.biayaEstimasi}
                    highlight
                />
            </div>

            {/* SKKNI Reference */}
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h3 className="font-bold text-blue-800 mb-2 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5" />
                    Rujukan SKKNI
                </h3>
                <p className="text-sm text-gray-700">{data.rujukanSKKNI}</p>
            </div>

            {/* LSP Info */}
            <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <h3 className="font-bold text-green-800 mb-2 flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    Tentang LSP Teknologi Digital
                </h3>
                <p className="text-sm text-gray-700">
                    LSP Teknologi Digital adalah Lembaga Sertifikasi Profesi yang terlisensi BNSP untuk menyelenggarakan Uji Kompetensi di bidang TIK. LSP ini berwenang menerbitkan sertifikat kompetensi yang diakui nasional berdasarkan SKKNI.
                </p>
            </div>
        </Card>
    )
}

function AssessmentSection() {
    const data = certificationData;

    return (
        <Card>
            <SectionTitle
                title="Metode Penilaian & Persyaratan"
                icon={Users}
            />
            <div className="grid md:grid-cols-2 gap-6">
                {/* Assessment Methods */}
                <div>
                    <h3 className="font-bold text-purple-700 mb-4 flex items-center gap-2">
                        <FileText className="w-5 h-5" />
                        Metode Asesmen
                    </h3>
                    <div className="space-y-3">
                        {data.metodePenilaian.map((metode, idx) => (
                            <div key={idx} className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                                <span className="bg-purple-600 text-white font-bold px-2 py-1 rounded text-sm shrink-0">
                                    {idx + 1}
                                </span>
                                <span className="text-gray-700 text-sm">{metode}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Requirements */}
                <div>
                    <h3 className="font-bold text-blue-700 mb-4 flex items-center gap-2">
                        <GraduationCap className="w-5 h-5" />
                        Persyaratan Peserta
                    </h3>
                    <List items={data.persyaratan} icon="check" />
                </div>
            </div>
        </Card>
    )
}

export function CertificationInfo() {
    return (
        <div className="space-y-8">
            {/* Basic Info */}
            <SchemeInfo />

            {/* Assessment Methods */}
            <AssessmentSection />
        </div>
    )
}