import { Award, Briefcase } from "lucide-react";
import { TABS, type TabKey } from "./assets/config/tabs";
import { jobsData } from "./assets/data/jobs";
import { JobCard } from "./modules/tugas5/jobs-card";
import { ComparisonTable } from "./modules/tugas5/comparison-table";
import { JobConclusion } from "./modules/tugas5/conclusion";
import { CertificationInfo } from "./modules/tugas6/certs-info";
import { UnitKompetensi } from "./modules/tugas6/competency-units";
import { CertificationComparison } from "./modules/tugas6/comparison-table";
import { CertificationConclusion } from "./modules/tugas6/conclusion";
import { useState } from "react";
import { PageWrapper } from "./assets/components/layout/page-wrapper";
import { Container } from "./assets/components/layout/container";
import { PageHeader } from "./assets/components/layout/page-header";
import { TabNavigation } from "./assets/components/layout/tabs-nav";
import { PageFooter } from "./assets/components/layout/page-footer";
import { APP_CONFIG } from "./assets/config/app";

interface ModuleSelectorProps {
  activeModule: "job" | "cert";
  onModuleChange: (module: "job" | "cert") => void;
}

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

function ModuleSelector({ activeModule, onModuleChange }: ModuleSelectorProps) {
  return (
    <div className="flex justify-center mb-8">
      <div className="bg-white rounded-lg shadow-lg p-2 inline-flex gap-2">
        <button
          onClick={() => onModuleChange("job")}
          className={`px-6 py-3 rounded-md font-medium transition-all inline-flex items-center gap-2 ${
            activeModule === "job"
              ? "bg-blue-600 text-white shadow-md"
              : "text-gray-600 hover:bg-gray-50"
          }`}
        >
          <Briefcase size={20} />
          <span>Tugas 5: Lowongan Kerja</span>
        </button>
        <button
          onClick={() => onModuleChange("cert")}
          className={`px-6 py-3 rounded-md font-medium transition-all inline-flex items-center gap-2 ${
            activeModule === "cert"
              ? "bg-purple-600 text-white shadow-md"
              : "text-gray-600 hover:bg-gray-50"
          }`}
        >
          <Award size={20} />
          <span>Tugas 6: Sertifikasi SKKNI</span>
        </button>
      </div>
    </div>
  )
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

  // Determine which module is active
  const isJobModule = activeTab.startsWith("job-");
  const isCertModule = activeTab.startsWith("cert-");

  return (
    <PageWrapper>
      <Container>
        <PageHeader
          title={APP_CONFIG.title}
          subtitle={APP_CONFIG.subtitle}
          mainIcon={isJobModule ? Briefcase : Award}
          variant="gradient"
          infoItems={[
            {
              label: "Profesi",
              value: APP_CONFIG.profession,
            },
            {
              label: "Total Lowongan",
              value: `${jobsData.length} Posisi`,
            },
            {
              label: "Status",
              value: "Data Terkini 2025",
            },
          ]}
        />
        <ModuleSelector
          activeModule={isJobModule ? "job" : "cert"}
          onModuleChange={(module) => {
            setActiveTab(module === "job" ? TABS.JOB_CARDS : TABS.CERT_INFO);
          }}
        />
        <TabNavigation
          tabs={isJobModule ? jobTabs : certTabs}
          activeTab={activeTab}
          onChange={(key) => setActiveTab(key as TabKey)}
        />
        <main className="mb-12">
          <TabContent activeTab={activeTab} />
        </main>
        <PageFooter />
      </Container>
    </PageWrapper>
  )
}

export default App;