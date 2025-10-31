import { useState, type ComponentType } from "react";
import { TABS, type TabKey } from "./assets/config/tabs";
import { Award, BarChart3, Briefcase, FileText, Target, TrendingUp } from "lucide-react";
import { jobsData } from "./assets/data/jobs";
import { APP_CONFIG } from "./assets/config/app";
import { certificationData } from "./assets/data/certs";
import { JobCard } from "./modules/tugas5/jobs-card";
import { ComparisonTable } from "./modules/tugas5/comparison-table";
import { JobConclusion } from "./modules/tugas5/conclusion";
import { CertificationInfo } from "./modules/tugas6/certs-info";
import { UnitKompetensi } from "./modules/tugas6/competency-units";
import { CertificationComparison } from "./modules/tugas6/comparison-table";
import { CertificationConclusion } from "./modules/tugas6/conclusion";
import { PageWrapper } from "./assets/components/layout/page-wrapper";
import { AppHeader } from "./assets/components/layout/app-header";
import { Container } from "./assets/components/layout/container";
import { SectionHeader } from "./assets/components/layout/section-header";
import { TabNavigation } from "./assets/components/layout/tabs-nav";
import { PageFooter } from "./assets/components/layout/page-footer";
import ModuleSelector from "./assets/components/layout/module-selector";

const jobTabs = [
    { key: TABS.JOB_CARDS, label: "Detail Lowongan" },
    { key: TABS.JOB_TABLE, label: "Tabel Perbandingan" },
    { key: TABS.JOB_CONCLUSION, label: "Kesimpulan" },
];

const certTabs = [
    { key: TABS.CERT_INFO, label: "Info Skema" },
    { key: TABS.CERT_UNITS, label: "Unit Kompetensi" },
    { key: TABS.CERT_COMPARISON, label: "Perbandingan SKKNI" },
    { key: TABS.CERT_CONCLUSION, label: "Kesimpulan" },
];

function getSectionTitle(tab: TabKey): string {
    const titles: Record<TabKey, string> = {
        [TABS.JOB_CARDS]: "Detail Lowongan Kerja",
        [TABS.JOB_TABLE]: "Perbandingan Lowongan",
        [TABS.JOB_CONCLUSION]: "Analisis & Kesimpulan",
        [TABS.CERT_INFO]: "Informasi Skema Sertifikasi",
        [TABS.CERT_UNITS]: "Unit Kompetensi SKKNI",
        [TABS.CERT_COMPARISON]: "Perbandingan SKKNI vs Industri",
        [TABS.CERT_CONCLUSION]: "Kesimpulan & Rekomendasi",
    };
    return titles[tab] || "Section";
}

function getSectionSubtitle(tab: TabKey): string {
    const subtitles: Record<TabKey, string> = {
        [TABS.JOB_CARDS]: "Eksplorasi detail lengkap setiap lowongan kerja Fullstack Developer",
        [TABS.JOB_TABLE]: "Analisis komparatif requirement dari berbagai perusahaan",
        [TABS.JOB_CONCLUSION]: "Insight industri dan rekomendasi strategis untuk fresh graduate",
        [TABS.CERT_INFO]: "Skema sertifikasi BNSP untuk Pengembang Web Pratama",
        [TABS.CERT_UNITS]: "3 Unit kompetensi inti yang paling penting untuk dikuasai",
        [TABS.CERT_COMPARISON]: "Gap analysis antara SKKNI dengan kebutuhan industri real",
        [TABS.CERT_CONCLUSION]: "Analisis relevansi dan strategi pengembangan karir",
    };
    return subtitles[tab] || "";
}

function getSectionIcon(tab: TabKey): ComponentType<any> {
    const icons: Record<TabKey, ComponentType<any>> = {
        [TABS.JOB_CARDS]: Briefcase,
        [TABS.JOB_TABLE]: BarChart3,
        [TABS.JOB_CONCLUSION]: TrendingUp,
        [TABS.CERT_INFO]: FileText,
        [TABS.CERT_UNITS]: Target,
        [TABS.CERT_COMPARISON]: BarChart3,
        [TABS.CERT_CONCLUSION]: Award,
    };
    return icons[tab] || Briefcase;
}

function getSectionInfo(tab: TabKey): Array<{ label: string; value: string; description?: string }> {
    // Job module info
    if (tab.startsWith("job-")) {
        return [
            {
                label: "Total Lowongan",
                value: `${jobsData.length} Posisi`,
                description: "Dari berbagai platform",
            },
            {
                label: "Profesi Target",
                value: APP_CONFIG.profession,
                description: "Frontend + Backend",
            },
            {
                label: "Lokasi",
                value: "Jakarta, Surabaya, Bali, Yogyakarta",
                description: "Hybrid & Remote",
            },
        ];
    }

    // Certification module info
    if (tab.startsWith("cert-")) {
        return [
            {
                label: "Skema",
                value: certificationData.namaSkema.split("(")[1]?.replace(")", "") || "Junior Web Dev",
                description: certificationData.kodeSkema,
            },
            {
                label: "Unit Kompetensi",
                value: `${certificationData.unitKompetensi.length} Unit`,
                description: "3 unit prioritas tinggi",
            },
            {
                label: "Biaya",
                value: certificationData.biayaEstimasi.split("-")[0].trim(),
                description: "Masa berlaku 3 tahun",
            },
        ];
    }

    return [];
}

function TabContent({ activeTab }: { activeTab: TabKey }) {
    // Tugas 5: Job Analysis
    if (activeTab === TABS.JOB_CARDS) {
        return (
            <div className="space-y-6">
                {jobsData.map((job, index) => (
                    <JobCard key={job.id} job={job} index={index} />
                ))}
            </div>
        )
    }
    if (activeTab === TABS.JOB_TABLE) {
        return <ComparisonTable jobs={jobsData} />;
    }
    if (activeTab === TABS.JOB_CONCLUSION) {
        return <JobConclusion />;
    }

    // Tugas 6: Certification
    if (activeTab === TABS.CERT_INFO) {
        return <CertificationInfo />;
    }
    if (activeTab === TABS.CERT_UNITS) {
        return <UnitKompetensi />;
    }
    if (activeTab === TABS.CERT_COMPARISON) {
        return <CertificationComparison />;
    }
    if (activeTab === TABS.CERT_CONCLUSION) {
        return <CertificationConclusion />;
    }

    // Fallback
    return (
        <div className="text-center py-12">
            <p className="text-gray-600">Content not found</p>
        </div>
    )
}

function App() {
    const [activeTab, setActiveTab] = useState<TabKey>(TABS.JOB_CARDS);

    const isJobModule = activeTab.startsWith("job-");

    return (
        <PageWrapper>
            <AppHeader />
            <Container>
                <ModuleSelector
                    activeModule={isJobModule ? "job" : "cert"}
                    onModuleChange={(module) => {
                        setActiveTab(module === "job" ? TABS.JOB_CARDS : TABS.CERT_INFO);
                    }}
                />
                <SectionHeader
                    title={getSectionTitle(activeTab)}
                    subtitle={getSectionSubtitle(activeTab)}
                    icon={getSectionIcon(activeTab)}
                    variant="gradient"
                    infoItems={getSectionInfo(activeTab)}
                />
                <TabNavigation
                    tabs={isJobModule ? jobTabs : certTabs}
                    activeTab={activeTab}
                    onChange={(key) => setActiveTab(key as TabKey)}
                />
                <main className="mb-12">
                    <TabContent activeTab={activeTab} />
                </main>
            </Container>
            <PageFooter />
        </PageWrapper>
    )
}

export default App;