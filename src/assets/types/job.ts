export interface Job {
    id: number;
    company: string;
    role: string;
    location: string;
    status: JobStatus;
    experience: string;
    salary: string;
    education: string;
    hardSkills: string[];
    softSkills: string[];
    certification: string;
    source: string;
    logoUrl: string;
    qrUrl: string;
    siteUrl: string;
}

export type JobStatus = "Full Time" | "Part Time" | "Contract" | "Internship" | "Freelance";