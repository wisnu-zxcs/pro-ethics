export const TABS = {
    // Tugas 5: Job Analysis
    JOB_CARDS: "job-cards",
    JOB_TABLE: "job-table",
    JOB_CONCLUSION: "job-conclusion",

    // Tugas 6: SKKNI Certification
    CERT_INFO: "cert-info",
    CERT_UNITS: "cert-units",
    CERT_COMPARISON: "cert-comparison",
    CERT_CONCLUSION: "cert-conclusion",
} as const;

export type TabKey = typeof TABS[keyof typeof TABS];